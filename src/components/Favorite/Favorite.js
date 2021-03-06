import PageTitle from "../PageTitle/PageTitle";
import styles from '../Favorite/Favorite.module.scss';
import Container from '../Container/Container';
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/cardsRedux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Favorite = props => {
  const favoriteCard = useSelector(state => getFavoriteCards(state));
  let navigate = useNavigate('/');

  useEffect (() => {
    if(favoriteCard.length === 0){
      setTimeout(() => navigate('/'), 1500)
    }
  });

  

  return (
    <>
    {favoriteCard.length ? <div className={styles.hero}>
      <PageTitle>Favorite</PageTitle>
      <Container>
        <div className={styles.column}>
          <ul className={styles.favCards}>
            {favoriteCard.map(card => <Card key={card.id} cardId={card.id} title={card.title}/>)}
          </ul>
        </div>
      </Container>
    </div> : <PageTitle>Nothing there</PageTitle>}
    </>
  );
}

export default Favorite;