import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSaved extends Component {
  render() {
    const {
      data,
    } = this.props;
    return (
      <label htmlFor="InputSaved">
        <input
          className="AttrCard"
          type="text"
          data-testid={ data }
        />
      </label>
    );
  }
}

export default InputSaved;

InputSaved.propTypes = {
  data: PropTypes.string.isRequired,
};
