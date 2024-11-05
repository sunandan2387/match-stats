import React  from 'react';
import ScoreBoard from './components/ScoreBoard';
import Timeline from './components/Timeline';
import MatchStatistics from './components/MatchStatistics';
import PossessionChartA from './components/PossessionChartA';
import PossessionChartB from './components/PossessionChartB';
import { useState, useEffect } from 'react';

function App() {

  const [filters, SetFilters] = useState('2')
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [maxValueA, setMaxValueA] = useState(61);
  const [maxValueB, setMaxValueB] = useState(39);

  useEffect(() => {
    if (countA < maxValueA) {
      const interval = setInterval(() => {
        setCountA(prevCount => prevCount + 1);
      }, 1000 / maxValueA); // Dynamically set interval based on maxValue

      return () => clearInterval(interval);
    }
  }, [countA, filters, maxValueA]);

  useEffect(() => {
    if (countB < maxValueB) {
      const interval = setInterval(() => {
        setCountB(prevCount => prevCount + 1);
      }, 1000 / maxValueB); // Dynamically set interval based on maxValue

      return () => clearInterval(interval);
    }
  }, [countB, filters, maxValueB]);

  return (
    <div className="bg-gray-900 min-w-[800px] text-white  min-h-screen flex flex-col gap-5 items-center">
      <div className='py-2 border-b min-w-[800px] w-full'>
        <p className='text-center'>Final - Champions League - Single Game</p>
      </div>
      <ScoreBoard teamA={'Real Madrid'} teamB={'Liverpool'} />
      {/* <Timeline /> */}
      
      <div className='grid grid-cols-4 min-w-[800px] w-full text-center gap-0.5 max-w-5xl'>
        <div onClick={() => {
          SetFilters('1')
          setCountA(0)
          setCountB(0)
        }} className={filters === '1' ? ' px-4 p-2 cursor-pointer border-t-[3.5px] border-[#5AABD3] font-semibold border-0' : ' px-4 p-2 cursor-pointer bg-[#1A2D46] rounded-sm font-semibold dark:text-white '}>Lineups&nbsp;&&nbsp;Formations</div>
        <div  onClick={() => {
          SetFilters('2')
          setCountA(0)
          setCountB(0)
        }} className={filters === '2' ? ' px-4 p-2 cursor-pointer border-t-[3.5px] border-[#5AABD3] font-semibold border-0' : ' px-4 p-2 cursor-pointer bg-[#1A2D46] rounded-sm font-semibold dark:text-white '}>Match&nbsp;Statistics</div>
        <div  onClick={() => {
          SetFilters('3')
          setCountA(0)
          setCountB(0)
        }} className={filters === '3' ? ' px-4 p-2 cursor-pointer border-t-[3.5px] border-[#5AABD3] font-semibold border-0' : ' px-4 p-2 cursor-pointer bg-[#1A2D46] rounded-sm font-semibold dark:text-white '}>Commentary</div>
        <div  onClick={() => {
          SetFilters('4')
          setCountA(0)
          setCountB(0)
        }} className={filters === '4' ? ' px-4 p-2 cursor-pointer border-t-[3.5px] border-[#5AABD3] font-semibold border-0' : ' px-4 p-2 cursor-pointer bg-[#1A2D46] rounded-sm font-semibold dark:text-white '}>Standings</div>
      </div>

      <div key={filters} className="flex justify-between min-w-[800px] items-center w-full max-w-5xl">
        <PossessionChartA posColor="#29BCF0" team="Real Madrid" possession={countA} />
        <MatchStatistics posColorA="#29BCF0" posColorB="#FE7417" shotsOnTargetA={10} shotsOnTargetB={3} shotsOffTargetA={8} shotsOffTargetB={10}
          foulsA={5} foulsB={15} cornerKicksA={9} cornerKicksB={5} offSidesA={7} offSidesB={3} yellowCardsA={0} yellowCardsB={1} redCardsA={0}
          redCardsB={0} savesA={1} savesB={2} />
        <PossessionChartB posColor="#FE7417" team="Liverpool" possession={countB} />
      </div>
    </div>
  );
}

export default App;
