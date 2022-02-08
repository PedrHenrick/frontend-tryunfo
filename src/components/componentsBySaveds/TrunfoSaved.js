import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrunfoSaved extends Component {
  render() {
    const {
      checked,
      onInputChange,
    } = this.props;
    return (
      <label htmlFor="filterTrunfo">
        Super trybe trunfo
        <input
          name="filterTrunfo"
          className="checkbox"
          data-testid="trunfo-filter"
          type="checkbox"
          checked={ checked }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default TrunfoSaved;

TrunfoSaved.propTypes = {
  checked: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
