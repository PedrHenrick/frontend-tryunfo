import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      value,
      onInputChange,
    } = this.props;
    return (
      <label htmlFor="Raridade">
        Raridade
        <select
          name="Raridade"
          data-testid="rare-input"
          value={ value }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
    );
  }
}

export default Select;

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
