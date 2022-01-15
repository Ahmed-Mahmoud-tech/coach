import React, { useState } from 'react';
import DataList from '../Global/DataList/DataList';
const CoachTable = () => {
  const dashedCurrentDate = new Date().toISOString().replace(/T.*/, '').split('-').join('-');
  const [tableName, setTableName] = useState('');
  const [dateValue, setDateValue] = useState(dashedCurrentDate);
  let typeOfExercises = ['type1', 'type2', 'type3'];
  let sets = [];
  const [sycle, setSycle] = useState();
  for (let x = 1; x < 100; x++) {
    sets.push(x.toString());
  }
  const peopleLis = () => {
    var elements = [];
    for (var i = 0; i < sycle; i++) {
      elements.push(
        <tr key={i}>
          <td>
            {' '}
            <DataList
              pattern={/^([a-z]{0,100})$/}
              items={typeOfExercises}
              error="must be char or space"
              inputWidth="100px"
            />{' '}
          </td>
          <td>
            {' '}
            <DataList
              pattern={/^([0-9]{0,2})$/}
              items={sets}
              error="must be number max 2 digit"
              inputWidth="100px"
            />{' '}
          </td>
          <td>
            {' '}
            <DataList
              pattern={/^([0-9]{0,2})$/}
              items={sets}
              error="must be number max 2 digit"
              inputWidth="100px"
            />{' '}
          </td>
          <td>
            {' '}
            <DataList
              pattern={/^([0-9]{0,2})$/}
              items={sets}
              error="must be number max 2 digit"
              inputWidth="100px"
            />{' '}
          </td>
        </tr>
      );
    }
    return elements;
  };

  return (
    <>
      <h3 className="tableName">
        Table Name:{' '}
        <input
          type="text"
          value={tableName}
          placeholder="--------------------"
          onChange={(e) => {
            setTableName(e.target.value);
          }}
        />
      </h3>
      <div className="syclecont">
        <div className="startDate">
          startDate:{' '}
          <input
            type="date"
            id="start"
            name="trip-start"
            value={dateValue}
            min={dashedCurrentDate}
            onChange={(e) => {
              setDateValue(e.target.value);
            }}
          />
        </div>
        <div className="cycle">
          cycle days number:{' '}
          <span>
            <DataList pattern={/^([0-9]{0,2})$/} items={sets} error="must be number max 2 digit" inputWidth="100px" getValue={setSycle} />
          </span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>TYPE</th>
            <th>SETS</th>
            <th>LEFTS(from)</th>
            <th>LEFTS(to)</th>
          </tr>
        </thead>
        <tbody>{peopleLis()}</tbody>
      </table>
    </>
  );
};

export default CoachTable;
