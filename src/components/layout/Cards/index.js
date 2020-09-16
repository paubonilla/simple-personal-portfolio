import styled from 'styled-components'

export const CardsContainer = styled.div`
  padding: 4rem;
  background: #f1f3f8;
  > h1 {
    text-align: center;
  }
  .cards__item__info {
    padding: 30px;
    background: #e8e8e8;
  }
  
  .cards__item__text {
    color: #196f3d;
    font-size: 12px;
    line-height: 24px;
    font-family: "Source Code Pro", monospace;
  }
`

export const CardsItem = styled.li`
  margin-bottom: 24px;
  display: flex;
  flex: 1;
  width: 300px;
  margin: 0 1rem;
  @media (max-width: 480px) {
    margin: 1rem 0;
  }
  border-radius: 10px;
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  /* max-width: 1120px; */
  /* width: 90%; */
  margin: 0 auto;
`
export const CardsInner = styled.div`
  position: relative;
  margin: 50px 0 45px;
`

export const CardsItemsContainer = styled.ul`
  padding: 10px;
  @media (max-width: 480px) {
    padding: 0;
  }
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
    border-radius: 4px 0 0 0;
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
    transition: all 0.2s linear;
    transform: scale(1.1);
    opacity: 1;
  }
`