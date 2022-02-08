import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSaved extends Component {
  render() {
    const {
      data,
      value,
      onInputChange,
      name,
    } = this.props;
    return (
      <label htmlFor="InputSaved">
        <input
          className="AttrCard"
          type="text"
          data-testid={ data }
          value={ value }
          name={ name }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default InputSaved;

InputSaved.propTypes = {
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
