import React, { Fragment } from "react"

const LazyLoader = () => {
  return (
    <Fragment>

        <div className="w-full h-full fixed top-0 left-0 bg-white opacity-35 z-50">
            <div className="flex justify-center items-center mt-[50vh]">
                <div className="fas fa-circle-notch fa-spin fa-5x text-violet-600"></div>
            </div>
        </div>
        <div className={`w-full h-full fixed top-0 left-0 cursor-progress z-50 flex justify-center items-center`}>
            <span className="loading loading-infinity loading-lg text-violet-600"></span>
        </div>
</Fragment>
  )
};

export default LazyLoader
