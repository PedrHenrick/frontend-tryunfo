import React from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import Card from './components/Card';
import SavedCards from './components/savedCards';

import './App.css';
import Header from './components/Header';
import InputSaved from './components/componentsBySaveds/InputSaved';
import SelectSaved from './components/componentsBySaveds/SelectSaved';
import TrunfoSaved from './components/componentsBySaveds/TrunfoSaved';

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
      filterName: '',
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
      filterName,
    } = this.state;
    return (
      <div>
        <Header />
        <article className="new_card">
          <section className="Organizer1">
            <h2 className="Title">Adicione a carta</h2>
            <section className="formForCard">
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
            </section>
          </section>
          <section className="Organizer2">
            <h2 className="Title">Preview</h2>
            <section className="preview">
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
            </section>
          </section>
        </article>

        <article className="filter_card">
          <section className="searchCards">
            <h1>Pesquisar carta:</h1>
            <InputSaved
              data="name-filter"
              value={ filterName }
              onInputChange={ this.onInputChange }
              name="filterName"
            />
            <SelectSaved />
            <TrunfoSaved />
          </section>
          <section className="savedCards">
            { filterName.length > 0
              ? cardList.filter((list) => list.cardName.includes(filterName))
                .map((cardS) => (
                  <SavedCards
                    key={ cardS.key }
                    keyy={ cardS.key }
                    { ...cardS }
                    deleteCards={ this.deleteCards }
                  />
                ))
              : cardList.map((cardss) => (
                <SavedCards
                  key={ cardss.key }
                  keyy={ cardss.key }
                  { ...cardss }
                  deleteCards={ this.deleteCards }
                />
              )) }
          </section>
        </article>
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
