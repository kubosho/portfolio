import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { chapterStyles } from './styles/chapter';
import { sectionStyles } from './styles/section';

@customElement('ks-self-introduction')
export class KSSelfIntroduction extends LitElement {
  static get styles() {
    return [
      chapterStyles,
      sectionStyles,
      css`
        section {
          margin-top: 64px;
        }
        @media (min-width: 725px) {
          section {
            margin-top: 128px;
          }
        }
      `,
    ];
  }

  protected render() {
    return html`
      <section>
        <h2 class="chapter-title">自己紹介</h2>
        <slot></slot>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ks-self-introduction': KSSelfIntroduction;
  }
}
