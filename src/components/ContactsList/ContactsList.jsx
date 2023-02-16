import { useSelector } from 'react-redux';
import { getContscts, getFilter } from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import { Ul } from './ContactsList.styled';

const getFiltredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );}
  

const ContactsList = () => {

  const contacts = useSelector(getContscts);
  const filter = useSelector(getFilter);
  const filtredContacts = getFiltredContacts(contacts, filter)

  if (filtredContacts.length > 0) {
    return (
      <Ul>
        {filtredContacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
          />
        ))}
      </Ul>
    )
  }
};


export default ContactsList;
