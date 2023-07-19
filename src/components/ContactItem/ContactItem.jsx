import PropTypes from 'prop-types';
import React from 'react';
import { ContainerItem } from './ContactItem.styled';
const ContactItem = ({ contact, onDelete }) => {
  return (
    <ContainerItem>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={onDelete}>Delete</button>
    </ContainerItem>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
