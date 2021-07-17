import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contact.module.css';

const Contact = ({ OnDelete, contact: { name, phone, id } }) => {
  return (
    <li className={styles.item}>
      {name}: {phone}
      <button
        className={styles.button}
        type="button"
        onClick={() => OnDelete(id)}
      >
        X
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
  }),
  OnDelete: PropTypes.func.isRequired,
};

export default Contact;
