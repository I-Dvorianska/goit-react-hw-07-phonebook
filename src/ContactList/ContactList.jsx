import { List, ListItem, Button } from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../redux/actions';
import { visibleContacts } from "../redux/Selectors/contactListSelectors";


  const ContactList = () => {

  const dispatch = useDispatch();
  const filteredContacts = useSelector(visibleContacts);

  return (
    <div>
      <List>

        {filteredContacts.map((contact) => {
          const { id, name, number } = contact;
          return (
            <ListItem key={id}>
              {name} - {number}
              <Button type="button" onClick={() => dispatch(deleteContact(id)) }>
                Delete
              </Button>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};


export default ContactList;
