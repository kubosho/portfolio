import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('ks-header')
export class KSHeader extends LitElement {
  static styles = css`
    header {
      max-width: 1260px;
      margin: 0 auto;
    }

    h1 {
      font-size: 54px;
    }
    @media (min-width: 725px) {
      h1 {
        font-size: 96px;
      }
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      font-size: 16px;
      line-height: 1.75;
    }
    @media (min-width: 725px) {
      li {
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