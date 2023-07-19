import PropTypes from 'prop-types';
const Filter = ({ filterText, onFilter }) => {
  return (
    <label htmlFor="">
      <p>Find contacts by name</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filterText}
        onChange={onFilter}
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  filterText: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
