import React from 'react'
import './Button.scss'
import styled from 'styled-components'

export const BuutonStyle = styled.button`
  /* > a {
    &:hover {
      color: #242424;
    }
    text-decoration: none;
    color: #fff;
  } */
`

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
  return (
    <>
      <BuutonStyle
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </BuutonStyle>
    </>
  )
}

export default Button
