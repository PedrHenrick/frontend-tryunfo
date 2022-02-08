import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textarea extends Component {
  render() {
    const {
      value,
      onInputChange,
    } = this.props;
    return (
      <label htmlFor="description">
        Descrição
        <textarea
          name="description"
          data-testid="description-input"
          value={ value }
          maxLength="75"
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default Textarea;

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
