import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'react-loader-spinner';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Contact from '../Contact';
import contactAnimation from './animation/contact.module.css';

import styles from './ContactsList.module.css';

const ContactList = ({ contacts, isLoading, isError }) => (
  <>
    {isLoading && (
      <Loader
        className={styles.loader}
        type="Puff"
        color="#e8c899"
        height={30}
        width={30}
      />
    )}

    {isError && <h2 className={styles.error}>{isError}</h2>}

    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(contact => {
        const { id } = contact;
        return (
          <CSSTransition key={id} timeout={250} classNames={contactAnimation}>
            <Contact key={id} contact={contact} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  </>
);

ContactList.defaultProps = {
  isError: null,
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.object,
};

export default ContactList;
