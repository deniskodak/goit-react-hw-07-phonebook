import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.css';

import { Component } from 'react';

class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = e => {
    const name = e.target.name;

    this.props.filterContacts(e.target.value);

    this.setState(() => ({
      [name]: e.target.value,
    }));
  };

  componentDidUpdate() {}

  render() {
    const { filter } = this.state;
    return (
      <label className={styles.label}>
        {' '}
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={filter}
          autoComplete="off"
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
};
export default Filter;
