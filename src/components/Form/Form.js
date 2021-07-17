import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';

import { createRandomContact } from './randomContact';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const name = e.target.name;

    this.setState(() => ({
      [name]: e.target.value,
    }));
  };

  createOwnContact = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts } = this.props;

    const existContact = this.findContact(contacts, name);

    existContact
      ? alert(`${name} is already in contacts`)
      : this.props.addContact(name, +number);

    this.setState(() => ({
      name: '',
      number: '',
    }));
  };

  createRandomContact = () => {
    const { fullName, phoneNumber } = createRandomContact();
    this.props.addContact(fullName, phoneNumber);
  };

  findContact = (array, name) => {
    return array.some(
      oldContact => oldContact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.createOwnContact}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
          />
        </label>

        <label className={styles.label}>
          Phone number
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            autoComplete="off"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
          />
        </label>
        <div className={styles.controlls}>
          <button className={styles.button} type="submit">
            Add contact
          </button>
          <button
            className={styles.button}
            type="button"
            onClick={this.createRandomContact}
          >
            Add random contact
          </button>
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
