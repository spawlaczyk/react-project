import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux';

const CardForm = props => {
  const dispatch = useDispatch();
  const columnId = props.columnId;

  const [ title, setTitle ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard({title, columnId}));
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button>
        <span>add card</span>
      </Button>
    </form>
  );
};

export default CardForm;