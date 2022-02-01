import React from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import Card from './components/Card';
import SavedCards from './components/savedCards';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Nome: '',
      description: '',
      Attr1: '0',
      Attr2: '0',
      Attr3: '0',
      Imagem: '',
      Raridade: 'normal',
      trunfo: false,
      hasTrunfo: false,
      verification: true,
      cardList: [],
    };
  }

  componentDidUpdate() {
    const {
      Nome,
      description,
      Attr1,
      Attr2,
      Attr3,
      Imagem,
      verification,
    } = this.state;

    const maxValueTotal = 210;
    const maxValueAttr = 90;
    const minValueAttr = 0;
    const sumAll = parseInt(Attr1, 10) + parseInt(Attr2, 10) + parseInt(Attr3, 10);

    const arrayValid = [
      Nome.length !== 0,
      description.length !== 0,
      Imagem.length !== 0,
      parseInt(Attr1, 10) >= minValueAttr && parseInt(Attr1, 10) <= maxValueAttr,
      parseInt(Attr2, 10) >= minValueAttr && parseInt(Attr2, 10) <= maxValueAttr,
      parseInt(Attr3, 10) >= minValueAttr && parseInt(Attr3, 10) <= maxValueAttr,
      sumAll <= maxValueTotal,
    ];

    if (arrayValid.every((item) => item === true) && verification === true) {
      this.handleChangeVerification(false);
    } else if (!(arrayValid.every((item) => item === true)) && verification === false) {
      this.handleChangeVerification(true);
    }
  }

  handleChangeVerification = (value) => {
    this.setState({
      verification: value,
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;

    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = (card) => {
    const { cardList } = this.state;

    card.key = nanoid();

    this.setState({
      Nome: '',
      description: '',
      Attr1: '0',
      Attr2: '0',
      Attr3: '0',
      Imagem: '',
      Raridade: 'normal',
      cardList: [...cardList, card],
    });

    if (card.cardTrunfo) {
      this.setState({
        hasTrunfo: true,
        trunfo: false,
      });
    }
  }

  deleteCards = (e) => {
    // e.preventDefault();
    const { cardList } = this.state;
    const keyOfElement = e.target.attributes.keyy.value;
    const element = cardList.filter((cardDel) => cardDel.key !== keyOfElement);
    this.setState({
      cardList: element,
    });

    const cardSelect = cardList.filter((cardDel) => cardDel.key === keyOfElement);

    if (cardSelect[0].cardTrunfo) {
      this.setState({ hasTrunfo: false, trunfo: false });
    }
  }

  render() {
    const {
      Nome,
      description,
      Attr1,
      Attr2,
      Attr3,
      Imagem,
      Raridade,
      trunfo,
      hasTrunfo,
      verification,
      cardList,
    } = this.state;
    return (
      <div>
        <Form
          cardName={ Nome }
          cardDescription={ description }
          cardAttr1={ Attr1 }
          cardAttr2={ Attr2 }
          cardAttr3={ Attr3 }
          cardImage={ Imagem }
          cardRare={ Raridade }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ verification }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ Nome }
          cardDescription={ description }
          cardAttr1={ Attr1 }
          cardAttr2={ Attr2 }
          cardAttr3={ Attr3 }
          cardImage={ Imagem }
          cardRare={ Raridade }
          cardTrunfo={ trunfo }
        />
        { cardList.map((cardS) => (
          <SavedCards
            key={ cardS.key }
            keyy={ cardS.key }
            cardName={ cardS.cardName }
            cardDescription={ cardS.cardDescription }
            cardAttr1={ cardS.cardAttr1 }
            cardAttr2={ cardS.cardAttr2 }
            cardAttr3={ cardS.cardAttr3 }
            cardImage={ cardS.cardImage }
            cardRare={ cardS.cardRare }
            cardTrunfo={ cardS.cardTrunfo }
            deleteCards={ this.deleteCards }

          />
        ))}
      </div>
    );
  }
}

export default App;

// Referência:
//    Checagem de tipos: https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper
//    componentDidUpdate: https://pt-br.reactjs.org/docs/react-component.html#componentdidupdate

// Code review:
//  Victor Santos: https://github.com/tryber/sd-018-b-project-tryunfo/pull/83
