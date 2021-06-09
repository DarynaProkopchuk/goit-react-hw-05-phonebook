import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactsListItem = ({ id, name, phone, onRemove }) => {
  return (
    <li className={styles.contactListItem}>
      {name}: {phone}{' '}
      <button onClick={() => onRemove(id)} className={styles.btnDelete}>
        delete
      </button>
    </li>
  );
};
const ContactsList = ({ contacts, onRemove }) => {
  if (contacts.lenght === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactsListItem {...contact} onRemove={onRemove} key={contact.id} />
      ))}
    </ul>
  );
};
ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default ContactsList;
