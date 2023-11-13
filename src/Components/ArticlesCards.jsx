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
    <Card className="w-72">
      <img className="img_card" src={image} alt={imagealt} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <a href={irArticle} className="btn btn-primary" target="_blank">
          {buttonText}
        </a>
      </Card.Body>
    </Card>
  );
}

export default ArticlesCards;
