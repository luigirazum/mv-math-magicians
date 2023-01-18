import PropTypes from 'prop-types';
import React from 'react';

class KeyButton extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { keyTag, keyClass } = this.props;
    return (
      <button type="button" className={keyClass}>
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
};

export default KeyButton;
