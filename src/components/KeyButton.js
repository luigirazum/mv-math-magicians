import PropTypes from 'prop-types';
import React from 'react';

class KeyButton extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handlePressKey = this.handlePressKey.bind(this);
  }

  handlePressKey(e) {
    const { props } = this;
    props.onPressKey(e);
  }

  render() {
    const { keyTag, keyClass } = this.props;
    return (
      <button type="button" name={keyTag} className={keyClass} onClick={this.handlePressKey}>
        { keyTag }
      </button>
    );
  }
}

KeyButton.defaultProps = {
  keyTag: '?',
  keyClass: 'numberTag',
};

KeyButton.propTypes = {
  keyTag: PropTypes.string,
  keyClass: PropTypes.string,
  onPressKey: PropTypes.func.isRequired,
};

export default KeyButton;
