// app/page.js (Server Component)
import YouTubeList from './components/YouTubeList';
import { fetchYouTubeData } from './utils/youtube'; // Import your utility function

export default async function Page({ searchParams }) { // Use searchParams
  try {
    const videos = await fetchYouTubeData(searchParams.q || ''); // Access "q" from searchParams
    return <YouTubeList videos={videos} />;
  } catch (err) {
    return <div>Error: {err.message}</div>;
  }
}