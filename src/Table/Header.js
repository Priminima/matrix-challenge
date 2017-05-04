import React from 'react';

export default ({ alternatives }) => {
  return (
    <thead>
      <tr>
        <th />
        {alternatives.map(alternative => (
          <th key={alternative.id}>
            <h3>
              {alternative.title}
            </h3>
          </th>
        ))}
      </tr>
    </thead>
  );
};
