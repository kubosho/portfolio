import { css } from 'lit-element';

export const chapterStyles = css`
  .chapter-title {
    margin: 0 0 16px;
    font-size: 32px;
    text-align: center;
  }
  @media (min-width: 725px) {
    .chapter-title {
      margin: 0 0 32px;
      font-size: 64px;
    }
  }
`;
