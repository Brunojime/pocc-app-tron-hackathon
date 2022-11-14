import css from 'styled-jsx/css'

export default css.global`
  html, body, #__next {
    padding: 0;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  .page-layout {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 480px) {
    .responsive-container {
      padding: 0px 1vw;
    }
  }
  @media (min-width: 481px) and (max-width: 768px) {
    .responsive-container {
      padding: 0px 2vw;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    .responsive-container {
      padding: 0px 3vw;
    }
  }
  @media (min-width: 1025px) and (max-width: 1490px) {
    .responsive-container {
      padding: 0px 5vw;
    }
  }
  @media (min-width: 1491px) {
    .responsive-container {
      padding: 0px 15vw;
    }
  }
`
