import React from 'react';
import { Link } from 'react-router-dom';

const Videos = ({ video }) => {
  
  return (
    <div className="h-auto">
      <Link to={`/video/${video?.video_id}`}>
        <div className="lg:h-48 md:h-44 sm:h-40 h-32">
          <img
            src={video?.thumbnails?.[0]?.url} 
            alt={video.title} 
            className="object-cover rounded-xl w-full h-full"  
          />
        </div>
        <div className="flex w-full space-x-4 mt-2">
          {/* <Link to={`/channel/${video?.channel_id}`}>
            <div className="w-[48px] h-[48px]">
              <img 
                src={video?.thumbnails?.[0]?.url} 
                alt={video.title}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </Link> */}
          <Link to={`/video/${video?.video_id}`}>
            <div className="w-full">
              <p className="font-normal sm:text-[14px] text-[13px]">{video.title}</p>
              <Link to={`/channel/${video?.channel_id}`}>
                <p className="dark:text-gray-200 font-medium sm:text-[13px] text-[12px]">{video?.author}</p>
              </Link>
              <p className="dark:text-gray-300 sm:text-[12px] text-[11px]">{video?.number_of_views} views</p>
            </div>
          </Link>
        </div>
      </Link>
    </div>
  )
}

export default Videos