import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsAction from '../../redux/contacts/contacts-actions';

const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Enter name for search"
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => contactsAction.filterChange(e),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
