// app/components/YouTubeList.js (Client Component)
"use client";

import { useState } from 'react';

export default function YouTubeList({ videos }) {
  const [keyword, setKeyword] = useState('');

  const searchVideos = async () => {
    // Update the URL with the new search term (client-side navigation)
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('q', keyword); // Use "q" as the search parameter
    window.location.href = newUrl.toString();
  };

  return (
    <div>
      <h1>YouTube Search</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={searchVideos}>Search</button>

      <ul>
        {videos?.map((video) => (
          <li key={video.id.videoId}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {video.snippet.title}
            </a>
            <p>
              Comments: {video.commentCount}, Likes: {video.likeCount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

