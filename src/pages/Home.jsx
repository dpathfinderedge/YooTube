import React, { useEffect, useState } from 'react';
import { Loader } from '../components';
import { fetchHome } from '../api';
import Videos from './Videos';

const Home = () => {
  const [trendingVideos, setTrendingVideos] = useState([]);
  useEffect(() => {
    fetchHome()
      .then((data) => {
        // console.log(data.videos)

        setTrendingVideos(data.videos);
      })
     .catch((error) => {
       console.log(error);
     })
  }, []);

  if(!trendingVideos?.length) return <Loader />;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-2 gap-4 w-full  my-2.5  px-2.5"> {/**sm:my-4 sm:px-4*/}
      {
        trendingVideos.map((video, i) => (
          <div className="w-full" key={i}>
            <Videos video={video} />
          </div>
        ))
      }
    </div>
  )
}

export default Home;