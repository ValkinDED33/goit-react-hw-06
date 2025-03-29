import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contact}>
      <span>
        {contact.name}: {contact.phone}
      </span>
      <button
        className={css["delete-button"]}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Удалить
      </button>
    </li>
  );
};

export default Contact;
