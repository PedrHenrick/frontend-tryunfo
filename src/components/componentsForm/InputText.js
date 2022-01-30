import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      name,
      data,
      value,
      onInputChange,
    } = this.props;
    return (
      <label htmlFor={ name }>
        { name }
        <input
          name={ name }
          data-testid={ data }
          type="text"
          value={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
