import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../api'
import ChannelCard from './ChannelCard';
import Loader from './Loader';
import Videos from './Videos';

const ChannelDetail = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData(`channels?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setChannelDetails(data?.items[0]);
      });

      getData(`search?channelId=${id}&part=snippet,id&order=date`)
      .then((data) => {
        setChannelVideos(data.items);
      });
  }, [id]);

  if(!channelDetails || !channelVideos ) return <Loader />;

  return (
    <div>
      <ChannelCard channelDetails={channelDetails}  />
      <div className="w-[110px] pl-3 my-4">
        <h2 className="font-semibold dark:text-gray-200 text-gray-600 pb-1 whitespace-nowrap">Channel Videos</h2>
        <div className="border-b-2 dark:border-gray-200 border-gray-400 w-full"></div>
      </div>
      <Videos videos={channelVideos} />
    </div>
  )
}

export default ChannelDetail;