import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getData } from '../api';
import Loader from './Loader';
import Videos from './Videos';

const Results = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

    useEffect(() => {
      getData(`search?part=snippet,id&q=${searchTerm}`)
        .then((data) => {
          setVideos(data.items);
        });
    }, [searchTerm]);

  if(!videos.length) return <Loader />;
  
  return (
    <div className="w-full">
        <Videos videos={videos} />
    </div>
  )
}

export default Results;