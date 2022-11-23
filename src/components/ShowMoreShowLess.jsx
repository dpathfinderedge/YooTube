import React, { useState} from 'react';
import moment from 'moment';

const ShowMoreShowLess = ({ children, viewCount, publishedAt, description }) => {
    const [isShowMore, setIsShowMore] = useState(false);

    const toggleBtn = () => {
      setIsShowMore(prevState => !prevState);
    };

    return  (
      <div className="bg-[#e1e1e1] dark:bg-secondary-dark-bg rounded-lg p-2 mt-4 w-full">
        {isShowMore ? (
          <>
            <div className="flex items-center space-x-2 font-normal">
              <p>{parseInt(viewCount).toLocaleString()} views</p>
              <p>{' • '}</p>
              <p>{moment(publishedAt).fromNow()}</p>
            </div>
            <p className="sm:text-[14px] text-[12px] mt-1 font-normal sm:w-[60%] w-[75%] break-words">{description}</p>
          </>
        ) : (
          <>
            <div className="flex items-center space-x-2 font-semibold sm:text-sm text-xs">
              <p>{parseInt(viewCount).toLocaleString()} views</p>
              <p>{' • '}</p>
              <p>{moment(publishedAt).fromNow()}</p>
            </div>
            <p className="sm:text-[14px] text-[12px] mt-1 font-normal w-[60%] w-[75%] break-words">{description.substr(0, 200)}</p>
          </>
        )}

        <button 
          onClick={toggleBtn}
          className="font-semibold text-sm border-0 cursor-pointer"
        >
          {isShowMore ? 'Show less' : 'Show more'}
        </button>
    </div>
    );
  }

export default ShowMoreShowLess