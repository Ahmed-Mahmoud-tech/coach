import styled from "styled-components";

const Wrapper = styled.nav`
  position: absolute;
  top: 70px;
  border: 1px solid;
  padding: 1.5rem;
  background: var(--bg-color);
  z-index: 10;

  .searchWrapper {
    max-width: 100% !important;
    width: unset !important;
    margin-bottom: 20px;
  }

  ul {
    padding-left: 20px;
    width: 150px;
    list-style: none;
  }

  li {
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: var(--small-font);
      position: relative;
      cursor: pointer;
      margin-bottom: 5px;

      svg {
        font-size: var(--medium-font);
      }

      &:after {
        position: absolute;
        content: "";
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 50%;
        left: -25px;
        top: 0.5rem;
      }
    }
  }
`;

export { Wrapper };
