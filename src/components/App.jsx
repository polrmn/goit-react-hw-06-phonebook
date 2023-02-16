import AddNewContact from './AddNewContact/AddNewContact';
import ContactsList from "./ContactsList/ContactsList";
import FilterContacts from "./FilterContacts/FilterContacts";
import { Title } from "./App.styled";


const App = () => { 
  
  return (
    <>
      <AddNewContact />
      <Title>Contacts</Title>
      <FilterContacts/>
      <ContactsList/>
    </>
  );
}

export default App;
