import { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    phone: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone } = this.state;
    const { contacts, addContact } = this.props;

    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} уже есть в контактах!`);
      return;
    }

    addContact({ id: Date.now(), name, phone });
    this.setState({ name: "", phone: "" });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Имя"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <input
          className={css.input}
          type="text"
          name="phone"
          placeholder="Телефон"
          value={this.state.phone}
          onChange={this.handleChange}
          required
        />
        <button className={css["submit-button"]} type="submit">
          Добавить
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = { addContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
