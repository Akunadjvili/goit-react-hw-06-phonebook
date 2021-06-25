import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Breakpoints from 'components/Breakpoints';
import styles from './PhoneBook.module.css';

const PhoneBook = () => {
  return (
    <>
      <Breakpoints>
        <div className={styles.PhoneBook}>
          <Filter />
          <ContactList />
          <ContactForm />
        </div>
      </Breakpoints>
    </>
  );
};

export default PhoneBook;
