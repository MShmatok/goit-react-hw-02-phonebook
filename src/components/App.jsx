import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Container, Title, SubTitle } from './App.styled';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  saveData = data => {
    let isDuplicate = this.state.contacts.find(elem => {
      return elem.name.toLowerCase() === data.name.toLowerCase();
    });

    if (isDuplicate) {
      alert(`${data.name} is alredy in contacts!`);
      return true;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), ...data }],
      };
    });
  };
  setFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };
  handleDelete = id => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== id) };
    });
  };
  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm saveData={this.saveData} />

        <SubTitle>Contacts</SubTitle>
        <Filter filterText={this.state.filter} onFilter={this.setFilter} />
        <ContactList
          contacts={this.state.contacts}
          filterText={this.state.filter}
          onDelete={this.handleDelete}
        />
      </Container>
    );
  }
}

export { App };
