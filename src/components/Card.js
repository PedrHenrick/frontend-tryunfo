import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
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
    } = this.props;

    return (
      <section>
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
          { `Attr01 ........................................... ${cardAttr1}` }
        </p>
        <p data-testid="attr2-card">
          { `Attr02 ........................................... ${cardAttr2}` }
        </p>
        <p data-testid="attr3-card">
          { `Attr03 ........................................... ${cardAttr3}` }
        </p>
        <p data-testid="rare-card">
          { `Tipo: ${cardRare}` }
        </p>
        {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null}
      </section>
    );
  }
}

export default Card;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
