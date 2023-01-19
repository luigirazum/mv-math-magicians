import React from 'react';
import PropTypes from 'prop-types';
import KeyButton from './KeyButton';
import Display from './Display';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
    };

    this.handlePressKeyButton = this.handlePressKeyButton.bind(this);
  }

  handlePressKeyButton(e) {
    const currentState = this.state;
    const newState = calculate(currentState, e.target.name);
    this.setState(newState);
  }

  render() {
    const { calcKeys, calcKeysNames, title } = this.props;
    const calcBtnClasses = calcKeysNames.split(',');
    const calcButtons = calcKeys.split(',')
      .map((calcKey, index) => {
        const keyName = 'id'.concat(index.toString());
        const classKey = index < 10 ? 'num'.concat(calcKey.toString()) : calcBtnClasses[index - 10];
        return (
          <KeyButton
            key={keyName}
            keyTag={calcKey}
            keyClass={classKey}
            onPressKey={this.handlePressKeyButton}
          />
        );
      });

    const { total, next } = this.state;
    const value = !next ? total : next;
    return (
      <div title={title} className="Calculator">
        <Display result={value} />
        {calcButtons}
      </div>
    );
  }
}

Calculator.defaultProps = {
  calcKeys: '0,1,2,3,4,5,6,7,8,9,.,AC,+/-,%,÷,x,-,+,=',
  calcKeysNames: 'decimal,reset,neg,mod,divide,times,minus,plus,equal',
};

Calculator.propTypes = {
  calcKeys: PropTypes.string,
  calcKeysNames: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Calculator;
