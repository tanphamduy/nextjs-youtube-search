// app/utils/youtube.js
const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export async function fetchYouTubeData(keyword) {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${keyword}&type=video&key=${YOUTUBE_API_KEY}`
    );
    const data = await res.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    if (!data.items || data.items.length === 0) {
      return []; // Return empty array if no results
    }


    const videoIds = data.items.map((item) => item.id.videoId).join(',');

    const statsRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    );
    const statsData = await statsRes.json();


    const videosWithStats = data.items.map((item) => {
      const stats = statsData.items.find(
        (statItem) => statItem.id === item.id.videoId
      );


      // Use optional chaining and parseInt to handle missing/invalid data safely
      const commentCount = parseInt(stats?.statistics?.commentCount || 0, 10);
      const likeCount = parseInt(stats?.statistics?.likeCount || 0, 10);

      return {
        ...item,
        commentCount,
        likeCount,
      };
    });


    // Sort by comment count (descending), then like count (descending)
    videosWithStats.sort((a, b) => {
      const commentDiff = b.commentCount - a.commentCount;
      if (commentDiff !== 0) {
        return commentDiff;
      }
      return b.likeCount - a.likeCount;
    });


    return videosWithStats.slice(0, 20);
  } catch (err) {
    console.error("Error fetching YouTube data:", err);
    throw err; // Re-throw the error to be handled in the component
  }
}
