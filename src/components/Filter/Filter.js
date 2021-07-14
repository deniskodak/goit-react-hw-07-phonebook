import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { Component } from "react";
import { connect } from "react-redux";
import { filterContacts } from "../../redux/actions/phoneBookActions";

class Filter extends Component {
  state = {
    filter: "",
  };

  handleChange = (e) => {
    const name = e.target.name;

    this.props.filterContacts(e.target.value);

    this.setState(() => ({
      [name]: e.target.value,
    }));
  };

  componentDidUpdate() {}

  render() {
    const { value } = this.state;
    return (
      <label className={styles.label}>
        {" "}
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={value}
          autoComplete="off"
          onChange={this.handleChange}
        />
      </label>
    );
  }
}
const mapStateToProps = ({ filter }, props) => ({
  filter,
});

const mapDispatchToProps = (dispatch) => ({
  filterContacts: (text) => dispatch(filterContacts(text)),
});

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
