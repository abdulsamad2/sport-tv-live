import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Iframe from "react-iframe";

import Data from "./Data";
function Channels() {
  const [streaminglink, setStreamingLink] = useState("");
  const [sandbox, setSandbox] = useState();
  const Channels = Data.map((item) => {
    return (
      <div key={item.name} className="border border-black hover:border-4">
        <img
          data-iframe={item.link}
          onClick={handleClick}
          className="h-16 w-32"
          src={item.img}
        ></img>
      </div>
    );
  });
  function handleClick(e) {
    setSandbox((prev) => "");
    setStreamingLink(e.target.dataset.iframe);
  }
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
  function handleLoad(e) {
    setSandbox(
      (prev) => `  allow-same-origin allow-scripts allow-top-navigation`
    );
    console.log(sandbox);
  }
  return (
    <div className="container py-2 mx-auto mb-72 ">
      <div className="flex space-x-4 px-4 justify-center flex-wrap space-y-4 items-center">
        {Channels}
      </div>
      <div className="mt-20 flex flex-col justify-center">
        {streaminglink ? (
          <Iframe
            src={streaminglink}
            // src="https://www.youtube.com/embed/odwLgz4m550?controls=0"
            width={`${isTabletOrMobile ? "100%" : "100%"}`}
            height={`${isTabletOrMobile ? "250px" : "800px"}`}
            marginHeight="0"
            marginWidth="0"
            allow="autoplay"
            allowFullscreen
            onLoad={handleLoad}
            sandbox={sandbox}
          ></Iframe>
        ) : (
          <>
            <h1 className="text-center capitalize font-extrabold text-lg py-4">
              Click onChannel Icon to Start Live Steaming
            </h1>
            <img
              width="100%"
              src="https://static-us-east-2-fastly-a.www.philo.com/storage/images/try/tv.png?auto=webp&width=500"
            ></img>
          </>
        )}
      </div>
    </div>
  );
}

export default Channels;
