import React from 'react';

// Add the Calculator
import Calculator from '../components/Calculator';

const CalcPage = () => (
  <>
    <div>
      <h2>Let&apos;s do some Math!</h2>
      <p>You can do some calcs using this basic Calculator.</p>
    </div>
    <Calculator title="Calculator" />
  </>
);

export default CalcPage;
