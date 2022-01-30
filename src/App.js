import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Nome: '',
      description: '',
      Attr1: '',
      Attr2: '',
      Attr3: '',
      Imagem: '',
      Raridade: 'normal',
      trunfo: false,
      // hasTrunfo: false,
      verification: true,
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
      // hasTrunfo,
      verification,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ Nome }
          cardDescription={ description }
          cardAttr1={ Attr1 }
          cardAttr2={ Attr2 }
          cardAttr3={ Attr3 }
          cardImage={ Imagem }
          cardRare={ Raridade }
          cardTrunfo={ trunfo }
          // hasTrunfo={ this.hasTrunfo }
          isSaveButtonDisabled={ verification }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ () => {} }
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
      </div>
    );
  }
}

export default App;

// Referência:
//    componentDidUpdate: https://pt-br.reactjs.org/docs/react-component.html#componentdidupdate

// Code review:
//  Victor Santos: https://github.com/tryber/sd-018-b-project-tryunfo/pull/83
