import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    const { name, lastName, aboutMe, wannaBe, agree, handleChange, isDisabled, saveClick, photo } = this.props;

    return (
      <form>
        <label>
          Foto de Perfil:
          <img src={ photo } name='photo' alt="my-profile" onChange={ handleChange } />
          <input type="text" name='photo' value={ photo } onChange={ handleChange } />
        </label>
        <label>
          Nome:
        <input type="text" name='name' value={ name } onChange={ handleChange } />
        </label>
        <label>
          Sobrenome:
        <input type="text" name='lastName' value={ lastName } onChange={ handleChange } />
        </label>
        <label>
          Sobre Mim:
        <textarea name="aboutMe" id="" cols="30" rows="10" value={aboutMe} onChange={ handleChange }></textarea>
        </label>
        <label>
          Quero ser:
        <select name="wannaBe" id="" value={ wannaBe } onChange={ handleChange }>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">FullStack</option>
        </select>
        </label>
        <label>
          concorda com os termos
        <input type="checkbox" name="agree" id="" value={agree} onChange={ handleChange } />
        </label>
        <button type='button' disabled={ isDisabled } onClick={
          () => saveClick({ name, lastName, aboutMe, wannaBe, photo })
        }>Salvar</button>
      </form>
    )
  }
}
