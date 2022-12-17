import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { NameLabel, Input, FormBlock } from './ContactForm.styled';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.name === this.props.onSubmit(this.state)) {
      return;
    }

    this.reset();
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  nameInputId = nanoid();

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <FormBlock>
            <NameLabel htmlFor={this.nameInputId}>
              Name
              <Input
                value={name}
                onChange={this.handleChange}
                id={this.nameInputId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </NameLabel>

            <NameLabel htmlFor={this.nameInputId}>
              Number
              <Input
                value={number}
                onChange={this.handleChange}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </NameLabel>
            <button type="submit">Add contact</button>
          </FormBlock>
        </form>
      </>
    );
  }
}

export default ContactForm;
