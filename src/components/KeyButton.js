import PropTypes from 'prop-types';
import React from 'react';

const KeyButton = (props) => {
  const handlePressKey = (e) => {
    const { onPressKey } = props;
    onPressKey(e);
  };

  const { keyTag, keyClass } = props;
  return (
    <button
      type="button"
      name={keyTag}
      className={keyClass}
      onClick={handlePressKey}
    >
      { keyTag }
    </button>
  );
};

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
