import styled from "styled-components";

const Wrapper = styled.nav`
  position: absolute;
  top: 70px;
  border: 1px solid;
  padding: 0.5rem;
  background: var(--bg-color);
  z-index: 10;
  right: 0;

  ul {
    width: 190px;
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    li {
      text-align: center;
      justify-content: space-evenly;
      flex-basis: 30%;
      display: flex;
      flex-direction: column-reverse;
      margin: 5px 0;
      cursor: pointer;
      span {
        font-size: var(--small-font);
      }
      svg {
        font-size: var(--large-font);
        margin: 0 auto;
      }
    }
  }
`;

export { Wrapper };
