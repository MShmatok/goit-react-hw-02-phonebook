import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ filterText, contacts, onDelete }) => {
  let colectionForRender = contacts.filter(item => {
    return item.name
      .trim()
      .toLocaleLowerCase()
      .includes(filterText.trim().toLocaleLowerCase());
  });
  return (
    <ul>
      {colectionForRender.map(item => (
        <ContactItem
          key={item.id}
          contact={item}
          onDelete={() => onDelete(item.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
ContactList.propTypes = {
  filterText: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
