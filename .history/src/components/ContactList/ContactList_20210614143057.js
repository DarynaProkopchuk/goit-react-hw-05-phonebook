import styles from './ContactList.module.css';
import { connect } from 'react-redux';

import * as actions from '../../redux/PhoneBook / actions';

const ContactsListItem = ({ id, name, phone, onRemove }) => {
  return (
    <li className={styles.contactListItem}>
      {name}: {phone}
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
      {contacts.map(({ name, id, phone }) => (
        <ContactsListItem
          {...{ name, id, phone }}
          onRemove={onRemove}
          key={id}
        />
      ))}
    </ul>
  );
};
const mapStateToProps = ({ contacts: { items, filter } }) => {
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch(actions.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
