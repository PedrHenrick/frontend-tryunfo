import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class TrunfoSaved extends Component {
  render() {
    // const {
    //   checked,
    //   onInputChange,
    // } = this.props;
    return (
      <label htmlFor="trunfo">
        Super trybe trunfo
        <input
          // name="trunfo"
          className="checkbox"
          // data-testid="trunfo-input"
          type="checkbox"
          // checked={ checked }
          // onChange={ onInputChange }
        />
      </label>
    );
  }
}

export default TrunfoSaved;

// Trunfo.propTypes = {
//   checked: PropTypes.bool.isRequired,
//   onInputChange: PropTypes.func.isRequired,
// };
