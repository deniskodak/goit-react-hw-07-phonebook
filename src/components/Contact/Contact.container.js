import Contact from './Contact';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/operations/operations';

const mapDispatchToProps = dispatch => ({
  OnDelete: id => dispatch(deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(Contact);
