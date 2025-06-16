import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import khyatumeals from '../../assets/khyatumeals.jpg';


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={khyatumeals} alt='khyatu' className={classes.image}></img>
        <h1>Khyatuu Kalita Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
