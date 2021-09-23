import { css } from 'lit-element';

export const sectionStyles = css`
  section {
    max-width: 1260px;
    margin: 0 auto;
  }

  .section-title {
    margin: 0 0 8px;
    font-size: 24px;
  }
  @media (min-width: 725px) {
    .section-title {
      margin: 0 0 16px;
      font-size: 32px;
    }
  }
`;
