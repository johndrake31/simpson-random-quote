import React from 'react';
import classes from './Card.module.css'

const Card = (props) => {
  const { quote, character, image } = props.quoteObj;

  return (
    <figure className={classes['QuoteCard']}>
      <img src={image} alt={character} />
      <figcaption>
        <blockquote>{quote}</blockquote>
        <cite>{character}</cite>
      </figcaption>
    </figure>
  );
};

export default Card;
