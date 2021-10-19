import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { PrimaryTitle, SecondaryTitle } from "./App.styled";

function App() {
  return (
    <>
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList />
    </>
  );
}

export default App;
