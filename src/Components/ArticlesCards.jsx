import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/ArticlesCards.css';

function ArticlesCards({
  image,
  title,
  text,
  buttonText,
  imagealt,
  irArticle,
}) {
  return (
    <Card bg="light" text="dark" className="shadow-md rounded-lg w-72">
      <img className="img_card rounded-t-lg" src={image} alt={imagealt} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <a
          href={irArticle}
          className="btn btn-primary rounded-lg"
          target="_blank"
        >
          {buttonText}
        </a>
      </Card.Body>
    </Card>
  );
}

export default ArticlesCards;
