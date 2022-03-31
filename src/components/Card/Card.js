import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {
  const cardId = props.cardId;
  const dispatch = useDispatch();

  const handleFavorite = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  }

  const handleRemove = e => {
    e.preventDefault();
    dispatch(removeCard(cardId));
  }

  return (
    <li className={styles.card}>
      {props.title}
      <form>
        <button onClick={handleFavorite}>
          <span className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)}></span>
        </button>
        <button  onClick={handleRemove}>
          <span className={clsx('fa fa-trash')}></span>
        </button>
      </form>  
    </li>
  );
};

export default Card;