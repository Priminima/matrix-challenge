import React from 'react';
import calcScore from '../calcScore';

export default ({ alternatives, aspects }) => {
  const scores = [];
  const colors = [];
  const colorArray = ["#486f24","#407f20","#388f1c","#309f18","#28af14","#20bf10","#18cf0c","#10df08","#08ef04","#00ff00",];
  for (let alternative of alternatives) {
    const score = calcScore(alternative.id);
    scores.push(score);
    const color = colorArray[score];
    colors.push(color)
  }
  return (
    <tfoot>
      <tr>
        <th>
          Score:
        </th>
        {alternatives.map(alternative => (
          <th key={alternative.id} style={{backgroundColor: colors[alternative.id-1]}}>
            {scores[alternative.id-1]}
          </th>
        ))}
      </tr>
    <tr>
      {colorArray.map(col=> (
        <th style={{backgroundColor: col}}>
          {col}
        </th>
      ))}
    </tr>
    </tfoot>
  );
};
