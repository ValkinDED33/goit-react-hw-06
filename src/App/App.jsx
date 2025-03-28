import { Component } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import css from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={css.container}>
        <h1>Книга контактов</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    );
  }
}

export default App;
