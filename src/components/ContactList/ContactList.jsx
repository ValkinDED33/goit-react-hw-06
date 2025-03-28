import { Component } from "react";
import { connect } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.filters.name,
});

export default connect(mapStateToProps)(ContactList);
