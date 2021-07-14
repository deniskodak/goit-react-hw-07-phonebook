import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  const { name, phoneNum } = contact;

  return (
    <li className={styles.item}>
      {name}: {phoneNum}
      <button className={styles.button} type="button" onClick={onDelete}>
        X
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phoneNum: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
