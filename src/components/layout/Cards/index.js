import styled from 'styled-components'

export const CardsContainer = styled.div`
  padding: 4rem;
  background: #fff;
  > h1 {
    text-align: center;
  }
  .cards__item__info {
    padding: 30px;
  }
  
  .cards__item__text {
    color: #252e48;
    font-size: 12px;
    line-height: 24px;
  }
`

export const CardsItem = styled.li`
  margin-bottom: 24px;
  display: flex;
  flex: 1;
  width: 300px;
  margin: 0 1rem;
  border-radius: 10px;
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`
export const CardsInner = styled.div`
  position: relative;
  margin: 50px 0 45px;
`

export const CardsItems = styled.ul`
  padding: 10px;
  @media only screen and (min-width: 1024px) {
    display: flex;
  }
`

export const CardsItemPicWrap = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 80%;
  overflow: hidden;
  &::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
    box-sizing: border-box;
  }
`

export const CardsItemImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;
  opacity: 0.8;
  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
`