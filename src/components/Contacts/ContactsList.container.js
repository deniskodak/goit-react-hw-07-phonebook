import ContactList from './ContactsList';

import { connect } from 'react-redux';
import {
  getFilteredContacts,
  getIsLoading,
  getErrorMessage,
} from '../../redux/selectors/selectors';

const mstp = state => ({
  contacts: getFilteredContacts(state),
  isLoading: getIsLoading(state),
  isError: getErrorMessage(state),
});

export default connect(mstp)(ContactList);
