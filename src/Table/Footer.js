import React from 'react';
import calcScore from '../calcScore';

export default ({ alternatives, aspects }) => {
  return (
    <tfoot>
      <tr>
        <th>
          Score:
        </th>
        {alternatives.map(alternative => (
          <th key={alternative.id}>
            {calcScore()}
          </th>
        ))}
      </tr>
    </tfoot>
  );
};
