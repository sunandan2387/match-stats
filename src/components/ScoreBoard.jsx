import React from 'react';

const ScoreBoard = ({ teamA, teamB }) => {
  return (
    <div className="bg-[#152A43] flex min-w-[800px] justify-center items-center w-full p-4 ">
      <div className='w-full max-w-5xl gap-8 flex justify-center items-center'>
      <div className='flex items-center justify-start gap-3'>
        <h2 className='text-3xl'>{teamA}</h2>
        <img className='w-[70px]' src="https://upload.wikimedia.org/wikipedia/sco/5/56/Real_Madrid_CF.svg" alt="team" />
      </div>
      <div className="text-center flex gap-3 items-center "> 
        <h4 className="text-4xl font-bold">3</h4>
        <div className='w-[50px] h-[50px] flex justify-center items-center bg-[#43546A] rounded-full'>
          <p>FT</p>
        </div>
        <h4 className="text-4xl font-bold">1</h4>
      </div>
      <div className='flex justify-end items-center gap-5'>
        <img className='w-[70px]' src="https://upload.wikimedia.org/wikipedia/sco/0/0c/Liverpool_FC.svg" alt="team" />
        <h2 className='text-3xl'>{teamB}</h2>
      </div>
      </div>
      </div>
  );
};

export default ScoreBoard;
