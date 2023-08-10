import React from "react";

const About = () => {
  return (
    <div className=" flex w-[80%] justify-center flex-col m-2 p-2">
      <div>
        <h2 className="font-bold text-3xl">About Peppermint</h2>
        <p className="m-2 text-xl">
          Peppermint is an award-winning robotics company, supported by SINE
          IIT-Bombay and Qualcomm. Peppermint develops and deploys Industrial
          and Enterprise robots and platforms for mobility-led services. The
          Engineering team has 50+ years of experience in building deep-tech and
          robotics products. Robots built on the Peppermint Platform are
          deployed across 13 cities in 4 countries!
        </p>

      </div>

      <div className="mt-[20px]">
        <h2 className="font-bold text-3xl">Why Peppermint Robots?</h2>
        <p className="m-2 text-xl">
          Peppermint Robots set out to 'expedite the advent of Service Robots'
          and we built our line of Robots for the consumer to use & be delighted
          with. At its core, Peppermint is not a product but a promise to
          provide the customers excellent and impeccable service as a Partner
          you can bank upon. As we build new products & technologies, it is our
          customers whose active feedback is going to ensure we build the
          products you truly need. Today, we provide Class-Leading features to
          our clients which form the bedrock of our offering. These upgrade the
          cleaning operations multifold for all types of facilities.
        </p>
      </div>

      <div className="w-[100%] border-2 mt-5 border-gray-800 m-auto"></div>
    </div>
  );
};

export default About;
