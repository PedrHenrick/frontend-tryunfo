import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './componentsForm/InputText';
import Select from './componentsForm/Select';
import Textarea from './componentsForm/Textarea';
import Trunfo from './componentsForm/Trunfo';
import Attr from './componentsForm/Attr';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    return (
      <form>
        {/* Nome */}
        <Input
          name="Nome"
          data="name-input"
          value={ cardName }
          onInputChange={ onInputChange }
        />

        {/* Descrição */}
        <Textarea
          value={ cardDescription }
          onInputChange={ onInputChange }
        />

        {/* Atributos */}
        <Attr
          name="Attr1"
          type="number"
          data="attr1-input"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <Attr
          name="Attr2"
          type="number"
          data="attr2-input"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <Attr
          name="Attr3"
          type="number"
          data="attr3-input"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
        />

        {/* Imagem */}
        <Input
          name="Imagem"
          data="image-input"
          value={ cardImage }
          onInputChange={ onInputChange }
        />

        {/* Raridade */}
        <Select
          value={ cardRare }
          onInputChange={ onInputChange }
        />

        {/* Trunfo */}
        { !hasTrunfo ? <Trunfo
          checked={ cardTrunfo }
          onInputChange={ onInputChange }
        /> : <p>Você já tem um Super Trunfo em seu baralho</p>}

        {/* button */}
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ () => onSaveButtonClick(card) }
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
