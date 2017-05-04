import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

import { aspects, alternatives } from './sampleData';
import './index.css';

ReactDOM.render(
  <Table aspects={aspects} alternatives={alternatives} />,
  document.getElementById('root')
);
