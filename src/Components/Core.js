import React from "react";

const Core = () => {
  return (
    <div>
      <div className="flex flex-wrap m-5 p-3 items-center justify-center gap-10">

        <div className="w-[40%] flex flex-wrap flex-col gap-10 space-y-5">
          <h2 className="font-bold text-3xl text-center">
            Creating A Full Stack Service Robotics Solution
          </h2>
          <p className="text-xl">
            Peppermint Service Robots are uniquely positioned to be the first
            full-stack Service Robotics Company in the world. Supported by SINE
            IIT-Bombay & Qualcomm, we manufacture Housekeeping Robots and
            Material Handling Robots tuned into your specific industry needs.
            Our full stack platform, along with Mint OS, and modular assembly
            delivers the most efficient autonomous solutions for out clients.
          </p>
        </div>
        <iframe className="rounded-lg shadow-lg"
          width="600"
          height="350"
          src="https://www.youtube.com/embed/fJzUZ7eA97U"
          title="Peppermint Robots | Scrubber Dryer | Housekeeping Robots"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="w-[80%] border-2 border-gray-800 m-auto"></div>

    </div>
  );
};

export default Core;
