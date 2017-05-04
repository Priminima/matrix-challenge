import React from 'react';

import Header from './Header';
import Row from './Row';
import Footer from './Footer';

export default ({ aspects, alternatives }) => (
  <table>
    <Header alternatives={alternatives} />
    <tbody>
      {aspects.map(aspect => (
        <Row key={aspect.id} aspect={aspect} alternatives={alternatives} />
      ))}
    </tbody>
    <Footer alternatives={alternatives} aspects={aspects} />
  </table>
);
