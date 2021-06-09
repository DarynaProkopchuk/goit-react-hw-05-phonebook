import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  phone: '',
};
class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleFormSubmit = e => {
    e.preventDefault();

    const { name, phone } = this.state;
    const { onAdd } = this.props;

    const isValidatedForm = this.validateForm();
    if (!isValidatedForm) return;
    onAdd({ id: uuid(), name, phone });
    this.resetForm();
  };
  validateForm = () => {
    const { name, phone } = this.state;
    const { onCheckUnique } = this.props;
    if (!name || !phone) {
      alert('Some field is empty');
      return false;
    }
    return onCheckUnique(name);
  };
  resetForm = () => {
    this.setState(INITIAL_STATE);
  };
  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChangeForm}
        />
        <input
          className={styles.input}
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={this.handleChangeForm}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Enter a correct Pnone-number"
          required
        />
        <button type="submit" className={styles.btnAddContact}>
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
