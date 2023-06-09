import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

const Header = (props) => {
  //header
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src="https://cdn.pixabay.com/photo/2016/10/11/11/33/marzipan-potatoes-1731202_960_720.jpg" alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;