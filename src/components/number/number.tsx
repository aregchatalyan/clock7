import React, { FC } from 'react';
import './number.styles.scss';
import { splitter } from '../../helpers/splitter';

type Units = 'hours' | 'minutes' | 'seconds';

interface NumberProps {
  unit: Units;
  value: number;
}

export const Number: FC<NumberProps> = ({
  unit,
  value
}) => {
  return (
    <>
      { splitter(value).map((v, i) => (
        <div className={ `number number--${ unit } number--${ v }` } key={ unit + i }>
          <div className="number__segment--h number__segment--a"/>
          <div className="number__segment--v number__segment--b"/>
          <div className="number__segment--v number__segment--c"/>
          <div className="number__segment--h number__segment--d"/>
          <div className="number__segment--v number__segment--e"/>
          <div className="number__segment--v number__segment--f"/>
          <div className="number__segment--h number__segment--g number__segment--gt"/>
          <div className="number__segment--h number__segment--g number__segment--gb"/>
        </div>
      )) }
    </>
  );
}
