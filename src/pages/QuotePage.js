import React from 'react';

// Add a quote
import Quote from '../components/Quote';

const QuotePage = () => (
  <>
    <div className="layout">
      <h2 className="subtitle">Today&apos;s Quote</h2>
      <Quote />
    </div>
  </>
);

export default QuotePage;
