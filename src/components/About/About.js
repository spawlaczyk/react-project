import PageTitle from "../PageTitle/PageTitle";
import styles from '../About/About.module.scss';

const About = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>About</PageTitle>
      <p>Lorem ipsum</p>
    </div>
  );
}

export default About;