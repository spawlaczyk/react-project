import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = props => {
  const dispatch = useDispatch();
  const listId = props.listId;

  const [title, setTitle] = useState ('');
  const [icon, setIcon] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({title, icon, listId}))
    setTitle('');
    setIcon('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <span>Title:</span> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <span>Icon: </span><TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>
        <span>add column</span>
      </Button>
    </form>
  );
}

export default ColumnForm;