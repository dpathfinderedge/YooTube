import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const SuggestedVideos = ({ video: { id:  { videoId }, snippet } }) => {
  return (
    <div className="flex md:flex-row flex-col justify-start md:gap-4 gap-2 w-full">
      <Link to={`/video/${videoId}`}>
        <div className="lg:w-[180px] md:w-[160px] w-full lg:h-[106px] md:h-[98px] sm:h-[85px] h-[140px]">
          <img 
            src={snippet?.thumbnails?.high?.url} 
            alt={snippet?.title}
            className="object-cover rounded-[12px] w-full h-full"
          />
        </div>
      </Link>
      <div className="w-full">
        <Link to={`/video/${videoId}`}>
          <h3 className="sm:text-[14px] text-[13px] dark:font-normal font-medium">{snippet?.title.slice(0, 60)}</h3>
          <Link to={`/channel/${snippet?.channelId}`}>
            <h1 className="dark:text-gray-300 text-gray-600">{snippet?.channelTitle}</h1>
          </Link>
          <p classsName="text-xs">Published {moment(snippet?.publishedAt).fromNow()}</p>
        </Link>
      </div>
    </div>
  )
}

export default SuggestedVideos;