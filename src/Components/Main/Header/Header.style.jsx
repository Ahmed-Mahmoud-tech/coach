import styled from "styled-components";

const Header = styled.header`
  display: flex;
  color: var(--font-color);
  font-size: var(--large-font);
  padding: 10px 2rem;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: auto;
  border-bottom: 1px solid var(--font-color);

  > div,
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      display: flex;
      margin: 0 0.5rem;
      position: relative;
    }
  }

  a.logo {
    margin-left: 15px;
  }
  span.counter {
    position: absolute;
    background: red;
    border-radius: 50%;
    font-size: var(--small-font);
    right: 3px;
    width: var(--small-font);
    height: var(--small-font);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    cursor: pointer;
  }
`;

export { Header };
