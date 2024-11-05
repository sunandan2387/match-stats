import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PossessionChartB = ({ team, posColor, possession }) => {

    return (
        <div className='flex flex-col items-center gap-5'>
            <div className='flex justify-end items-center w-full gap-5'>
                <h2 className='text-2xl'>{team}</h2>
                <img className='w-[40px]' src="https://upload.wikimedia.org/wikipedia/sco/0/0c/Liverpool_FC.svg" alt="team" />
            </div>
            <div className={`bg-[${posColor}]  rounded-sm py-2 w-[250px] flex items-center justify-center`}>
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

export default PossessionChartB;
