import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className="flex sm:flex-row flex-col justify-start sm:gap-4 gap-2.5 w-full">
      <div>
        <Link to={`/video/${videoId}`}>
          <div className="sm:h-36 h-28 md:w-80 sm:w-56 w-full">
            <img 
              src={snippet?.thumbnails?.high?.url} 
              alt={snippet?.title}
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/video/${videoId}`}>
          <h1 className="dark:text-gray-100 text-gray-800 sm:text-[16px] text-sm">{snippet?.title.slice(0, 60)}</h1>
          <p className="dark:font-light text-xs">Published {moment(snippet?.publishedAt).fromNow()}</p>
          <Link to={`/channel/${snippet?.channelId}`}>
            <h2 className="font-semibold dark:text-gray-200 text-gray-600 mt-1">{snippet?.channelTitle}</h2>
          </Link>
          <p className="sm:text-[13px] text-[12px] dark:text-gray-400 text-gray-600">{snippet?.description}</p>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard;