import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SavedCards extends Component {
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
      deleteCards,
      keyy,
    } = this.props;

    return (
      <form className="saved" onSubmit={ (e) => deleteCards(e) }>
        <section className="NameCard">
          <h2 data-testid="name-card">{ cardName }</h2>
        </section>
        <section className="image_cont">
          <img
            data-testid="image-card"
            className="imgCard"
            src={ cardImage }
            alt={ cardName }
          />
        </section>
        <p data-testid="description-card" className="Descricao_card">
          { `Descrição: ${cardDescription}` }
        </p>
        <p data-testid="attr1-card">
          { `Attr01 ............................... ${cardAttr1}` }
        </p>
        <p data-testid="attr2-card">
          { `Attr02 ............................... ${cardAttr2}` }
        </p>
        <p data-testid="attr3-card">
          { `Attr03 ............................... ${cardAttr3}` }
        </p>
        <p data-testid="rare-card">
          { `Tipo: ${cardRare}` }
        </p>
        {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p>
          : <p className="NotTrunfo"> </p>}
        <button
          type="button"
          className="ButtonExcluir"
          data-testid="delete-button"
          onClick={ deleteCards }
          keyy={ keyy }
        >
          Excluir
        </button>
      </form>
    );
  }
}

export default SavedCards;

SavedCards.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteCards: PropTypes.func.isRequired,
  keyy: PropTypes.string.isRequired,
};
