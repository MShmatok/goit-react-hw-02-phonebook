import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ContainerForma, Label } from './ContactForm.styled';
const InitialValue = {
  name: '',
  number: '',
};
class ContactForm extends Component {
  state = InitialValue;
  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.props.saveData(this.state)) {
      return;
    }
    this.setState(InitialValue);
  };
  render() {
    return (
      <ContainerForma onSubmit={this.onSubmit}>
        <Label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onChange}
          />
        </Label>
        <Label htmlFor="">
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onChange}
          />
        </Label>
        <button type="submit" onSubmit={this.onSubmit}>
          Add contact
        </button>
      </ContainerForma>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  saveData: PropTypes.func.isRequired,
};
