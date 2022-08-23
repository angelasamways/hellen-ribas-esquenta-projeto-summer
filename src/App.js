import React from 'react';
import './App.css';
import Form from './components/Form';
import Preview from './components/Preview';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '', 
      lastName: '', 
      aboutMe: '', 
      wannaBe: 'frontend',
      agree: false,
      isDisabled: true,
      data: [],
      previewOn: false,
    }
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const { name, lastName, agree } = this.state;
      if (name && lastName && agree) {
        this.setState({
          isDisabled: false,
        })
      } else {
        this.setState({
          isDisabled: true,
        })
      }
    });
  }

  saveClick = (objetoInfo) => {
    this.setState((prevState) => ({
      data: [...prevState.data, objetoInfo],
      previewOn: true,
    }));
  }

  render() {
    const { name, lastName, aboutMe, image, wannaBe, agree, isDisabled, data, previewOn } = this.state;
    return (
      <>
      <Form 
      handleChange={ this.handleChange }
      name={ name }
      lastName={ lastName }
      aboutMe={ aboutMe }
      image={ image }
      wannaBe={ wannaBe }
      agree={ agree }
      isDisabled={ isDisabled }
      saveClick={ this.saveClick }
       />
      <Preview
          name={ name }
          lastName={ lastName }
          aboutMe={ aboutMe }
          wannaBe={ wannaBe } />
      {
        previewOn === true && data.map((e) => <Preview
        name={ e.name }
        lastName={ e.lastName }
        aboutMe={ e.aboutMe }
        wannaBe={ e.wannaBe } />)
      }
      </>
    );
  }
}

export default App;
