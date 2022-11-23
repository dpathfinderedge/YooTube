import React from 'react';

const ChannelCard = ({channelDetails}) => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="lg:h-48 md:h-44 sm:h-40 h-36 w-full">
        <img 
          src={channelDetails?.brandingSettings?.image?.bannerExternalUrl} 
          alt={channelDetails?.snippet?.title} 
          className="object-cover w-full h-full" 
        />
      </div>
      
      <div className="flex space-x-6 my-2 ml-4 w-full">
        <div className="md:w-[60px] sm:w-[50px] w-[35px] md:h-[60px] sm:h-[50px] h-[35px]">
          <img 
            src={channelDetails?.snippet?.thumbnails?.high?.url} 
            alt={channelDetails?.snippet?.title} 
            className="object-cover rounded-full w-full h-full" 
          />
        </div>
        <div className="dark:text-gray-300 text-gray-500">
          <h1 className="font-semibold sm:text-lg text-sm">{channelDetails?.snippet?.title}</h1>
          <h3 className="sm:text-sm text-xs">{channelDetails?.statistics?.subscriberCount ?
            parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString('en-US') 
            : '0'} subscribers
          </h3>
        </div>
      </div>
    </div>
  )
}

export default ChannelCard;
