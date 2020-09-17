import styled from 'styled-components'

export const ProgressBar = styled.div`
  padding: 5rem 10rem;
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  color: #f1f3f8;
  display: flex;
  flex-direction: column;
  background-color: #393b44;
  @media (max-width: 480px) {
    padding: 30px;
    margin: 0;
  }

  .header {
    font-size: 30px;
    @media (max-width: 480px) {
      font-size: 20px;
    }
    @media (max-width: 320px) {
      font-size: 20px;
    }
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 8px;
  }
  ul {
  list-style: none;
  li {
    position: relative;
    margin: 50px 0;
    font-weight: 500;
    text-transform: lowercase;
    @media (max-width: 480px) {
      font-size: 14px;
    }
     p {
      color: #85ac87;
      font-family: "Source Code Pro", monospace;
     }

    &:before {
      content: "";
      position: absolute;
      top: calc(100% + 10px);
      left: 0;
      width: 100%;
      height: 10px;
      background-color: #242425;
      border-radius: 1000px;
    }
    &:after {
      content: "";
      position: absolute;
      top: calc(100% + 10px);
      left: 0;
      width: 0;
      height: 10px;
      background-color: #faed27;
      border-radius: 1000px;
      animation-duration: 0.7s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }
  }
  li.html:after {
    animation-name: html;
    @keyframes html {
      to {
        width: 85%;
      }
    }
  }
  li.js:after {
    animation-name: js;
    @keyframes js {
      to {
        width: 80%;
      }
    }
  }
  li.css:after {
    animation-name: css;
    @keyframes css {
      to {
        width: 90%;
      }
    }
  }
  li.scss:after {
    animation-name: scss;
    @keyframes scss {
      to {
        width: 90%;
      }
    }
  }
  li.react:after {
    animation-name: react;
    @keyframes react {
      to {
        width: 80%;
      }
    }
  }
  li.photoshop:after {
    animation-name: photoshop;
    @keyframes photoshop {
      to {
        width: 75%;
      }
    }
  }
  li.illustrator:after {
    animation-name: illustrator;
    @keyframes illustrator {
      to {
        width: 75%;
      }
    }
  }
  li.premiere-pro:after {
    animation-name: premiere-pro;
    @keyframes premiere-pro {
      to {
        width: 87%;
      }
    }
  }
}
`