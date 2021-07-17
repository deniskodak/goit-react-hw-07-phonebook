import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import './App.css';

import { getContacts } from './redux/operations/operations';

import ContactsList from './components/Contacts';
import Form from './components/Form';
import Filter from './components/Filter';

class App extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <div className="container">
        <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          classNames="container-fade"
        >
          <section className="app-section">
            <h1 className="app-title">Phonebook</h1>
            <Form />
            <h2 className="app-title top-margin">Filter your contacts</h2>
            <Filter />
          </section>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="container-next-fade"
        >
          <section className="app-section">
            <h2 className="app-title">Contacts</h2>
            <ContactsList />
          </section>
        </CSSTransition>
      </div>
    );
  }
}

App.propTypes = {
  getContacts: PropTypes.func.isRequired,
};
const mdtp = dispatch => ({
  getContacts: () => dispatch(getContacts()),
});
export default connect(null, mdtp)(App);
