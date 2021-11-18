import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('ks-header')
export class KSHeader extends LitElement {
  static styles = css`
    header {
      max-width: 1260px;
      margin: 32px auto 0;
    }
    @media (min-width: 725px) {
      header {
        margin-top: 128px;
      }
    }

    h1 {
      margin: 0;
      font-size: 54px;
      line-height: 1;
    }
    @media (min-width: 725px) {
      h1 {
        font-size: 96px;
      }
    }

    ul {
      display: flex;
      justify-content: center;
      list-style-type: none;
      padding: 0;
      margin-top: 32px;
    }
    @media (min-width: 725px) {
      ul {
        margin-top: 128px;
      }
    }

    li {
      margin-left: 1em;
      font-size: 16px;
      line-height: 1.75;
    }
    li:first-child {
      margin: 0;
    }
    @media (min-width: 725px) {
      li {
        margin-left: 2em;
        font-size: 24px;
      }
    }
  `;

  protected render() {
    return html`
      <header>
        <h1>I'm kubosho</h1>
        <ul>
          <li>
            <a href="#self-introduction">自己紹介</a>
          </li>
          <li>
            <a href="#experience">経験</a>
          </li>
          <li>
            <a href="#skill-set">スキルセット</a>
          </li>
          <li>
            <a href="#contact">連絡先</a>
          </li>
        </ul>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ks-header': KSHeader;
  }
}
