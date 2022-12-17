import PropTypes from 'prop-types';
import { ContactItem, Text } from './Contact.styled';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <ContactItem key={id}>
      <Text>{name}:</Text>
      <Text>{number}</Text>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </ContactItem>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
