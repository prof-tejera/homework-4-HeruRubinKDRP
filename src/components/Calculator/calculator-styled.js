import styled from "styled-components";

export const CalculatorStyled = styled.div`
  padding: 2vw;
  background-color: #b2dce1;

  .primary-btn-container {
    display: flex;

  }

  .operator-keys-section {
    gap: 1vw;
    display: flex;
    flex-direction: column;

    .operator-key {
      background-color: #efce91;
    }
  }

  .number-keys-section {
    display: flex;
    flex-wrap: wrap;
    width: 15vw;
    gap: 1vw;
    align-content: flex-start;
    justify-content: flex-start;
  }

  .number-key, .operator-key {
    border-radius: 1vw;
    height: 2vw;
    width: 2vw;
    user-select: none;
    padding: 1vw;
    border: 1px solid #0000001a;
    background-color: white;
    filter: drop-shadow(1px 3px 6px rgba(0, 0, 0, 0.5));

    &:active {
      transition: filter 0.15s;
      filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.25));
    }


    &.zero-key {
      width: 7vw;
    }
  }

`