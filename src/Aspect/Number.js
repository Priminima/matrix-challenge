import React from 'react';
export default ({ value, aspect: { unit } }) => (
  <div style={{ textAlign: 'right' }}>
    {value || null}
    <span style={{ opacity: 0.7 }}> {unit}</span>
  </div>
);
