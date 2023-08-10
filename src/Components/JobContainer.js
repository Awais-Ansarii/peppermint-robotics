import React from "react";

const JobContainer = ({ jobData }) => {
  const { title, exp, skills, req } = jobData;
  return (
    <div className="flex flex-col m-2 p-5 text-xl text-black  bg-gray-200 shadow-lg rounded-lg w-[350px] h-[32rem] justify-center ">
      <h2 className="font-semibold text-center">{title}</h2>
      <h3 className="p-2">Experience : {exp}</h3>
      <div >
        <p className="text-left">Skills Required : </p>
        <ul >
          {skills.map((skill, i) => {
            return <li className="p-2" key={i}> ◉ {skill}</li>;
          })}
        </ul>
      </div>

      <div >
        <ul>
          {req.map((requiremnt, j) => {
            return (<li className="p-2" key={j}> ➡ { requiremnt}</li>)
          })}
        </ul>
      </div>

      <button className="cursor-pointer w-[10rem]  shadow-lg mt-2 p-2 font-semibold text-sm text-white text-center m-auto rounded-xl bg-black hover:bg-white hover:text-black ">
        Apply Now ➤
      </button>
    </div>
  );
};

export default JobContainer;
