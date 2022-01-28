import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>

        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
          />
        </label>

        <label htmlFor="textarea">
          Descrição
          <input
            data-testid="description-input"
            type="textarea"
          />
        </label>

        <label htmlFor="attr1">
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
          />
        </label>

        <label htmlFor="attr2">
          Attr02
          <input
            data-testid="attr2-input"
            type="number"
          />
        </label>

        <label htmlFor="attr3">
          Attr03
          <input
            data-testid="attr3-input"
            type="number"
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
          />
        </label>

        <label htmlFor="select">
          Raridade
          <select
            data-testid="rare-input"
            placeholder="Raridade"
            id="select"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="checkbox">
          Super trybe trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
          />
        </label>

        <label htmlFor="button">
          <input
            data-testid="save-button"
            type="button"
            value="Salvar"
          />
        </label>

      </form>
    );
  }
}

export default Form;
