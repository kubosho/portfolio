import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { chapterStyles } from './styles/chapter';
import { sectionStyles } from './styles/section';

@customElement('ks-contact')
export class KSContact extends LitElement {
  static get styles() {
    return [
      chapterStyles,
      sectionStyles,
      css`
        section {
          margin: 32px auto;
        }
        @media (min-width: 725px) {
          section {
            margin: 64px auto 128px;
          }
        }

        ul {
          display: flex;
          justify-content: center;
          padding: 0;
          list-style-type: none;
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
      `,
    ];
  }

  protected render() {
    return html`
      <section>
        <h2 class="chapter-title">連絡先</h2>
        <ul>
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd91FPe5BwaK9jluYc7vnVDcAQIOWaHWDcmt3cO1paj5eFlFw/viewform"
              >お問い合わせ</a
            >
          </li>
          <li>
            <a href="https://www.facebook.com/kubosh0/">Facebook</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kubosho/">LinkedIn</a>
          </li>
        </ul>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ks-contact': KSContact;
  }
}
