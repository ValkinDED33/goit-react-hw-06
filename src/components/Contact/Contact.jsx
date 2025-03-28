import { Component } from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

class Contact extends Component {
  handleDelete = () => {
    this.props.deleteContact(this.props.contact.id);
  };

  render() {
    const { name, phone } = this.props.contact;

    return (
      <li className={css.contact}>
        <span>
          {name}: {phone}
        </span>
        <button className={css["delete-button"]} onClick={this.handleDelete}>
          Удалить
        </button>
      </li>
    );
  }
}

const mapDispatchToProps = { deleteContact };

export default connect(null, mapDispatchToProps)(Contact);
