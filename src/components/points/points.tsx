import React, { FC } from 'react';
import './points.styles.scss';

interface PointsProps {
  visible: boolean
}

export const Points: FC<PointsProps> = ({ visible }) => {
  return (
    <div className="points">
      { visible && (
        <>
          <div className="points__point points__point--t"/>
          <div className="points__point points__point--b"/>
        </>
      ) }
    </div>
  );
}
