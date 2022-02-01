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
      <form onSubmit={ (e) => deleteCards(e) }>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null}
        <button
          type="button"
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
