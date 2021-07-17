import { connect } from 'react-redux';
import { addContact } from '../../redux/operations/operations';
import ContactForm from './Form';
import { getContacts } from '../../redux/selectors/selectors';

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: (name, phone) => dispatch(addContact(name, phone)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
