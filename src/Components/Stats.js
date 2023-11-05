import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Stats() {
  const percentage = 40;

  return (
    <div className='m-5 text-center'>
        <div className='rounded-3xl  shadow bg-header flex flex-col'>
        <h1 className='text-white pt-3 text-lg'>Goal reached</h1>
      <div className='flex w-full h-32 overflow-hidden px-10 pb-10 items-center justify-around'>
        <div>
            <div className='flex w-32 h-16'>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    className='h-36'
                    circleRatio={0.5}
                    styles={buildStyles({
                        rotation: 0.75,
                        strokeLinecap: 'butt',
                        textSize: '16px',
                        pathTransitionDuration: 0.5,
                        pathColor: `#FCB000`,
                        textColor: 'white',
                        trailColor: '#d6d6d6',
                        backgroundColor: 'gray',
                    })}
                    />
            </div>
        </div>
        <div>
            <h1 className='bg-white h-10 w-10 my-5'></h1>
            <h1 className='bg-white w-10 h-10'></h1>
        </div>
      </div>
    </div>
                    </div>
  );
}

export default Stats;
