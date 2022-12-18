import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Container, Head } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
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

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <Head>Phonebook</Head>
      <ContactForm onSubmit={addContact} />
      <Head>Contacts</Head>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts()} onDelete={deleteContact} />
    </Container>
  );
};

export default App;
