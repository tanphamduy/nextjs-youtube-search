# YouTube Search App

This Next.js application allows you to search for YouTube videos by keyword and displays the top 20 most popular videos, sorted by comment count and then by like count.

## Features

* Search YouTube videos by keyword.
* Displays the top 20 results.
* Sorts results by comment count (descending), then like count (descending).
* Robust error handling.
* Uses Next.js App Router and Server/Client Components for optimal performance.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tanphamduy/nextjs-youtube-search.git 
2. **Install dependencies:**
    ```bash
    npm install
3. **Get a YouTube Data API v3 Key:**
* Go to the Google Cloud Console.
* Enable the YouTube Data API v3.
* Create an API key.
4. **Set environment variables:**
* Create a .env.local file in your project root:
    ```bash
    NEXT_PUBLIC_YOUTUBE_API_KEY=YOUR_API_KEY
5. **Run the development server:**
    ```bash
    npm run dev
Open http://localhost:3000 with your browser to see the result.
