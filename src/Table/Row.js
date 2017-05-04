import React from 'react';

import TextAspect from '../Aspect/Text';
import NumberAspect from '../Aspect/Number';
import ScoreAspect from '../Aspect/Score';

const aspectComponents = {
  text: TextAspect,
  number: NumberAspect,
  score: ScoreAspect
};

export default ({ aspect, alternatives }) => {
  const Component = aspectComponents[aspect.type];

  return (
    <tr>
      <th>
        <strong>{aspect.title}</strong>
        <span style={{ float: 'right' }}>{aspect.weight}</span>
      </th>
      {alternatives.map(alternative => (
        <td key={alternative.id}>
          <Component
            aspect={aspect}
            alternative={alternative}
            value={alternative.values[aspect.id]}
          />
        </td>
      ))}
    </tr>
  );
};
