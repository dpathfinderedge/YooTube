import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { getData } from '../api';
import { SuggestedVideos } from './';
import Loader from './Loader';
import ShowMoreShowLess from './ShowMoreShowLess';

const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelId, setChannelId] = useState(null);
  const [channelDetails, setChannelDetails] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const { id } = useParams();
 
  useEffect(() => {
    getData(`videos?part=contentDetails,snippet,statistics&id=${id}&type=video`)
      .then((data) => {
        console.log(data.items[0]);

        setVideoDetails(data.items[0]);
        setChannelId(data.items[0].snippet.channelId);
      });
      getData(`channels?part=snippet,statistics&id=${channelId}`)
      .then((data) => {
        setChannelDetails(data?.items[0]);
      });
    getData(`search?part=id,snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => {
        setSuggestedVideos(data.items);
      });
  }, [id, channelId]);
  if(!videoDetails) return <Loader />;

  const { snippet: { title, publishedAt, description, channelTitle, localized, thumbnails: { high: { url } } }, statistics: { commentCount, likeCount, viewCount } } = videoDetails;

  return (
    <div className="relative flex sm:flex-row flex-col gap-4 sm:my-4 my-2 sm:px-4 px-2.5">
      <div className="lg:w-3/5 md:w-[55%] sm:w-3/4 w-full">
        <div className="lg:h-[300px] md:h-[250px] sm:h-[220px] h-[140px]" >
          <ReactPlayer height={'100%'} width={'100%'}  url={`https://www.youtube.com/watch?v=${id}`} controls /> {/**style={{ height: '45vh' }} className="md:h-52 sm:h-44 h-40 md:w-72 sm:w-64 w-full" */}
        </div>
        <div className="flex lg:flex-row lg:space-x-6 space-x-0 flex-col justify-between w-full mt-1">
          <h2 className="font-semibold sm:text-[14px] text-[12px] sm:mt-2 mt-1">{localized.title}</h2>
          <div className="flex justify-center space-x-2 items-center text-xs whitespace-nowrap w-44 h-8 dark:bg-gray-700 bg-gray-200 rounded p-2">
            <p>{parseInt(likeCount).toLocaleString()} likes</p> {','}
            <p>{parseInt(commentCount).toLocaleString()} comments</p>
          </div>
        </div>
        <div className="w-full">
          <Link to={`/channel/${channelId}`} className="flex space-x-4 items-center mt-2">
            <div className="w-[44px] h-[45px] ">
              <img src={url} alt={title} className="rounded-full w-full h-full" />
            </div>
            <div className="flex flex-col">
              <h1 className="dark:text-gray-300 text-gray-600">{channelTitle}</h1>
              <p className="text-xs">{channelDetails?.statistics?.subscriberCount ?
                parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString('en-US') 
                : '0'} subscribers
              </p>
            </div>
          </Link>
        </div>
        <ShowMoreShowLess viewCount={viewCount} publishedAt={publishedAt} description={description} />
      </div>
      <div className="lg:w-2/5 md:w-[45%] sm:w-1/4 w-full sm:h-[540px] h-auto overflow-y-auto overflow-x-hidden">
        <h1 className="block sm:hidden mb-1">Suggested Videos</h1>
        <div className="flex flex-col justify-between gap-4 w-full">
          {suggestedVideos.map((video, i) => (
            <SuggestedVideos key={i} video={video} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default VideoDetail;