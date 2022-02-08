import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SelectSaved extends Component {
  render() {
    // const {
    //   value,
    //   onInputChange,
    // } = this.props;
    return (
      <label htmlFor="Raridade">
        Raridade
        <select>
          {/* // name="Raridade" */}
          {/* // data-testid="rare-input" */}
          {/* // value={ value } */}
          {/* // onChange={ onInputChange } */}
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
    );
  }
}

export default SelectSaved;

// SelectSavad.propTypes = {
//   value: PropTypes.string.isRequired,
//   onInputChange: PropTypes.func.isRequired,
// };
