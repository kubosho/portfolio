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
          margin-top: 32px;
        }
        @media (min-width: 725px) {
          section {
            margin-top: 64px;
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
