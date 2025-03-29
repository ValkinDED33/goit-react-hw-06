import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "phone") setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} уже есть в контактах!`);
      return;
    }
    dispatch(addContact({ id: Date.now(), name, phone }));
    setName("");
    setPhone("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="name"
        placeholder="Имя"
        value={name}
        onChange={handleChange}
        required
      />
      <input
        className={css.input}
        type="text"
        name="phone"
        placeholder="Телефон"
        value={phone}
        onChange={handleChange}
        required
      />
      <button className={css["submit-button"]} type="submit">
        Добавить
      </button>
    </form>
  );
};

export default ContactForm;
