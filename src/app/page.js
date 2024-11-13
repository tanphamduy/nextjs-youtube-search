// app/page.js (Next.js 13 App Router)
"use client"; // Mark this file as a Client Component
import { useState } from 'react';

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

async function fetchYouTubeData(keyword) {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${keyword}&type=video&key=${YOUTUBE_API_KEY}`
    );
    const data = await res.json();

    if (data.error) {
      throw new Error(data.error.message);
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
      // ... (rest of the mapping code is the same as before)
    });
    // ... (sorting code is the same)

    return videosWithStats.slice(0, 20);
  } catch (err) {
    console.error("Error fetching YouTube data:", err);
    throw err; // Re-throw the error to be handled in the component
  }
}



export default async function Home() {
  const [keyword, setKeyword] = useState('');
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);


  const searchVideos = async () => {
    try {
        const data = await fetchYouTubeData(keyword);
        setVideos(data);
    }
    catch (err) {
        setError(err.message || "An error occurred.");
    }

  };



  return (
    <div>
      {/* ... (rest of the JSX is similar) */}
       {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
