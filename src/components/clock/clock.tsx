import React, { FC, useEffect, useState } from 'react';
import './clock.styles.scss';
import { Number } from '../number';
import { Points } from '../points';

interface TimeState {
  hs: number,
  ms: number,
  ss: number,
  visible: boolean
}

const initialState: TimeState = { hs: 0, ms: 0, ss: 0, visible: true }

export const Clock: FC = () => {
  const [ time, setTime ] = useState<TimeState>(initialState);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      setTime(prevState => ({
        hs: now.getHours(),
        ms: now.getMinutes(),
        ss: now.getSeconds(),
        visible: !prevState.visible
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">
      <div className="clock__main">
        <Number unit="hours" value={ time.hs }/>
        <Points visible={ time.visible }/>
        <Number unit="minutes" value={ time.ms }/>
        <Points visible={ time.visible }/>
        <Number unit="seconds" value={ time.ss }/>
      </div>
      <div className="clock__footer"/>
    </div>
  );
}
