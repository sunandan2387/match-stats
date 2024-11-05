import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PossessionChartA = ({ team, posColor, possession }) => {

    return (
        <div className=' flex flex-col items-center gap-5'>
            <div className='flex items-center w-full justify-start gap-3'>
                <img className='w-[40px]' src="https://upload.wikimedia.org/wikipedia/sco/5/56/Real_Madrid_CF.svg" alt="team" />
                <h2 className='text-2xl'>{team}</h2>
            </div>
            <div className={`bg-[${posColor}]  rounded-sm py-2 flex w-[250px] items-center justify-center`}>
                <p>Ball Possession</p>
            </div>
            <div className='w-[200px]'>
                <CircularProgressbar value={possession} text={`${possession}%`}
                    styles={buildStyles({
                        textColor: posColor,
                        pathColor: posColor,
                        trailColor: "#23364F",
                        strokeLinecap: "butt"
                    })}
                />
            </div>
        </div>
    )
};

export default PossessionChartA;
