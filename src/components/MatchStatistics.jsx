import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const MatchStatistics = ({ posColorA, posColorB, shotsOnTargetA, shotsOnTargetB, shotsOffTargetA, shotsOffTargetB, foulsA, foulsB, cornerKicksA, cornerKicksB, 
  offSidesA, offSidesB, yellowCardsA, yellowCardsB, redCardsA, redCardsB, savesA, savesB
}) => {

  return (
    <div className="p-4 pt-0 rounded-lg shadow-lg w-full flex flex-col gap-2 max-w-lg mx-4">
      <div className='w-full py-1.5 px-3 bg-[#1A2D46] text-white'>
        <p className='text-center text-xl'>Match Statistics</p>
      </div>
      <div className='space-y-1'>
        <div className='flex justify-between'>
          <div>
            <p className='text-white'>{shotsOnTargetA}</p>
          </div>
          <div>
            <p className='text-white'>Shots On Target</p>
          </div>
          <div>
            <p className='text-white'>{shotsOnTargetB}</p>
          </div>
        </div>
        <div className='flex w-full'>
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={shotsOnTargetA+shotsOnTargetB} animateOnRender className='w-full rotate-180' bgColor={posColorA} completed={shotsOnTargetA} customLabel=' ' />
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={shotsOnTargetA+shotsOnTargetB} animateOnRender className='w-full' bgColor={posColorB} completed={shotsOnTargetB} customLabel=' ' />
        </div>
      </div>
      <div className='space-y-1'>
        <div className='flex justify-between'>
          <div>
            <p className='text-white'>{shotsOffTargetA}</p>
          </div>
          <div>
            <p className='text-white'>Shots Off Target</p>
          </div>
          <div>
            <p className='text-white'>{shotsOffTargetB}</p>
          </div>
        </div>
        <div className='flex w-full'>
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={shotsOffTargetA+shotsOffTargetB} animateOnRender className='w-full rotate-180' bgColor={posColorA} completed={shotsOffTargetA} customLabel=' ' />
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={shotsOffTargetA+shotsOffTargetB} animateOnRender className='w-full' bgColor={posColorB} completed={shotsOffTargetB} customLabel=' ' />
        </div>
      </div>
      <div className='space-y-1'>
        <div className='flex justify-between'>
          <div>
            <p className='text-white'>
              {foulsA}
            </p>
          </div>
          <div>
            <p className='text-white'>Fouls</p>
          </div>
          <div>
            <p className='text-white'>{foulsB}</p>
          </div>
        </div>
        <div className='flex w-full'>
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={foulsA+foulsB} animateOnRender className='w-full rotate-180' bgColor={posColorA} completed={foulsA} customLabel=' ' />
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={foulsA+foulsB} animateOnRender className='w-full' bgColor={posColorB} completed={foulsB} customLabel=' ' />
        </div>
      </div>
      <div className='space-y-1'>
        <div className='flex justify-between'>
          <div>
            <p className='text-white'>{cornerKicksA}</p>
          </div>
          <div>
            <p className='text-white'>Corner Kicks</p>
          </div>
          <div>
            <p className='text-white'>{ cornerKicksB}</p>
          </div>
        </div>
        <div className='flex w-full'>
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={cornerKicksA+cornerKicksB} animateOnRender className='w-full rotate-180' bgColor={posColorA} completed={cornerKicksA} customLabel=' ' />
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={cornerKicksA+cornerKicksB} animateOnRender className='w-full' bgColor={posColorB} completed={cornerKicksB} customLabel=' ' />
        </div>
      </div>
      <div className='space-y-1'>
        <div className='flex justify-between'>
          <div>
            <p className='text-white'>{offSidesA}</p>
          </div>
          <div>
            <p className='text-white'>Offsides</p>
          </div>
          <div>
            <p className='text-white'>{offSidesB}</p>
          </div>
        </div>
        <div className='flex w-full'>
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={offSidesA+offSidesB} animateOnRender className='w-full rotate-180' bgColor={posColorA} completed={offSidesA} customLabel=' ' />
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={offSidesA+offSidesB} animateOnRender className='w-full' bgColor={posColorB} completed={offSidesB} customLabel=' ' />
        </div>
      </div>
      <div className='space-y-1'>
        <div className='flex justify-between'>
          <div>
            <p className='text-white'>
              {yellowCardsA}
            </p>
          </div>
          <div>
            <p className='text-white'>Yellow Cards</p>
          </div>
          <div>
            <p className='text-white'>{yellowCardsB}</p>
          </div>
        </div>
        <div className='flex w-full'>
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={yellowCardsA+yellowCardsB} animateOnRender className='w-full rotate-180' bgColor={posColorA} completed={yellowCardsA} customLabel=' ' />
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={yellowCardsA+yellowCardsB} animateOnRender className='w-full' bgColor={posColorB} completed={yellowCardsB} customLabel=' ' />
        </div>
      </div>
      <div className='space-y-1'>
        <div className='flex justify-between'>
          <div>
            <p className='text-white'>{redCardsA}</p>
          </div>
          <div>
            <p className='text-white'>Red Cards</p>
          </div>
          <div>
            <p className='text-white'>{redCardsB}</p>
          </div>
        </div>
        <div className='flex w-full'>
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={redCardsA+redCardsB} animateOnRender className='w-full rotate-180' bgColor={posColorA} completed={redCardsA} customLabel=' ' />
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={redCardsA+redCardsB} animateOnRender className='w-full' bgColor={posColorB} completed={redCardsB} customLabel=' ' />
        </div>
      </div>
      <div className='space-y-1'>
        <div className='flex justify-between'>
          <div>
            <p className='text-white'>{savesA}</p>
          </div>
          <div>
            <p className='text-white'>Saves</p>
          </div>
          <div>
            <p className='text-white'>{savesB}</p>
          </div>
        </div>
        <div className='flex w-full'>
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={savesA+savesB} animateOnRender className='w-full rotate-180' bgColor={posColorA} completed={savesA} customLabel=' ' />
          <ProgressBar baseBgColor='#23364F' borderRadius='0' height='8px' maxCompleted={savesA+savesB} animateOnRender className='w-full' bgColor={posColorB} completed={savesB} customLabel=' ' />
        </div>
      </div>
    </div>
  );
};

export default MatchStatistics;
