import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;

  .searchWrapper {
    width: 50vw;
    background: var(--bg-color);
    border-radius: 10px;
    border: 1px solid var(--font-color);
    overflow: hidden;
    max-width: 700px;
    display: flex;
  }

  input {
    background-color: transparent;
    width: 100%;
    color: var(--font-color);
    padding: 0 10px;
  }
  svg {
    font-size: var(--large-font);
    padding: 0.2rem;
  }
`;

export { Wrapper };
