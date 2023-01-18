import React from 'react';
import PropTypes from 'prop-types';
import KeyButton from './KeyButton';
import Display from './Display';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { calcKeys, calcKeysNames, title } = this.props;
    const calcBtnClasses = calcKeysNames.split(',');
    const calcButtons = calcKeys.split(',')
      .map((calcKey, index) => {
        const keyName = 'id'.concat(index.toString());
        const classKey = index < 10 ? 'num'.concat(calcKey.toString()) : calcBtnClasses[index - 10];
        return (<KeyButton key={keyName} keyTag={calcKey} keyClass={classKey} />);
      });

    return (
      <div title={title} className="Calculator">
        <Display result="0" />
        {calcButtons}
      </div>
    );
  }
}

Calculator.defaultProps = {
  calcKeys: '0,1,2,3,4,5,6,7,8,9,.,AC,+/-,%,/,X,-,+,=',
  calcKeysNames: 'decimal,reset,neg,perc,divi,mult,subst,add,equal',
};

Calculator.propTypes = {
  calcKeys: PropTypes.string,
  calcKeysNames: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Calculator;
