import React from 'react';
import { Rings } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Rings
        height="80"
        width="80"
        color="#7e8a8a"
        radius="6"
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  )
}

export default Loader;