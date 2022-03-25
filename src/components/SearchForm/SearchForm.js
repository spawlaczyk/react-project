import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();

  const [ title, setTitle ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchString(title));
    setTitle('');
  }
  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} placeholder='Search...' />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;