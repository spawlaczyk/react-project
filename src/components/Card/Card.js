import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';

const Card = props => {
  const cardId = props.cardId;
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  }

  return (
    <li className={styles.card}>
      {props.title}
      <form onSubmit={handleSubmit}>
        <button>
          <span className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)}></span>
        </button>
      </form>  
    </li>
  );
};

export default Card;