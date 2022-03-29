import PageTitle from "../PageTitle/PageTitle";
import styles from '../Favorite/Favorite.module.scss';
import Container from '../Container/Container';
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const favoriteCard = useSelector(state => getFavoriteCards(state));
  let navigate = useNavigate();

  if(favoriteCard.length === 0){
    navigate('/');
    return <PageTitle>No favorite cards</PageTitle>
  }

  return (
    <div className={styles.hero}>
      <PageTitle>Favorite</PageTitle>
      <Container>
        <div className={styles.column}>
          <ul>
            {favoriteCard.map(card => <Card key={card.id} cardId={card.id} title={card.title} className='fav'/>)}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Favorite;