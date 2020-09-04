import React from 'react'
import { CardsItem, CardsItemPicWrap, CardsItemImage } from '../Cards/index'
import { Link } from 'react-router-dom'

// export default function CardItem({
//   path,
//   label,
//   alt,
//   src,
//   text
// }) {
export default function CardItem(props) {
  return (
    <>
      <CardsItem>
        <Link to={props.path} className="cards__item__link">
          <CardsItemPicWrap
            data-category={props.label}
            className="cards__item__pic-wrap">
            <CardsItemImage
              src={props.src}
              alt={props.alt}
              className="cards__item__img" />
          </CardsItemPicWrap>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </CardsItem>
    </>
  )
}
