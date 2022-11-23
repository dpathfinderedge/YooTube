import React from 'react';
import { VideoCard } from './';

const Videos = ({videos, videoDetails}) => {
  if(!videos?.length) return 'Loading...';
  return (
    <div className="flex flex-wrap gap-4 sm:my-4 my-2 sm:px-4 px-2.5 w-full">
      {videos.map((video, i) => (
        <div key={i} className="w-full">
          {video.id.videoId && <VideoCard video={video} />}
        </div>
      ))}
    </div>    
  )
}

export default Videos;