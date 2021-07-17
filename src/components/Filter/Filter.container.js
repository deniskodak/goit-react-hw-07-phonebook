import { connect } from 'react-redux';
import { filterContacts } from '../../redux/actions/phoneBookActions';
import { getFilter } from '../../redux/selectors/selectors';
import Filter from './Filter';

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  filterContacts: text => dispatch(filterContacts(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
