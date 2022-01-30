import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Attr extends Component {
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
          max="90"
          name={ name }
          data-testid={ data }
          type="number"
          value={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default Attr;

Attr.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
