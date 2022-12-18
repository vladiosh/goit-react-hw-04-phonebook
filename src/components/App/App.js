import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Container, Head } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (chekName(newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return newContact.name;
    }

    setContacts([...contacts, newContact]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const chekName = newName => {
    return contacts.find(({ name }) => name === newName);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const componentDidMount = () => {
    const contacts = localStorage.getItem('contacts');
    const parcedContacts = JSON.parse(contacts);

    if (parcedContacts) {
      this.setState({ contacts: parcedContacts });
    }
  };

  const componentDidUpdate = (prevProps, prevState) => {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <Head>Phonebook</Head>
      <ContactForm onSubmit={addContact} />
      <Head>Contacts</Head>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </Container>
  );
};

export default App;
