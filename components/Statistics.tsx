import React from 'react'
import SimpleBarChart from './BarChart';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Statistics() {
    return (
        <div className='t-px-8'>

            <div className='t-flex t-justify-between'>
                <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbar
                        value={66}
                        strokeWidth={2}
                        text={`${66}%`}
                        styles={buildStyles({
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0,
                        
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',
                        
                            // Text size
                            textSize: '16px',
                        
                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,
                        
                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',
                        
                            // Colors
                            pathColor: `#89A4FF, ${66 / 100})`,
                            textColor: '#f88',
                            trailColor: '#ffffff',
                            backgroundColor: '#3e98c7',
                          })}
                    />;
                </div>
                <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbar
                        value={80}
                        strokeWidth={2}
                        text={`${80}%`}
                    />;
                </div>
                <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbar
                        value={90}
                        strokeWidth={2}
                        text={`${90}%`}
                    />;
                </div>
                <div style={{ width: 100, height: 100 }}>
                    <CircularProgressbar
                        value={50}
                        strokeWidth={2}
                        text={`${50}%`}
                    />;
                </div>
            </div>

            <SimpleBarChart />
        </div>
    )
}
