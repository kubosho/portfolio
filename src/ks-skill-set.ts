import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { chapterStyles } from './styles/chapter';
import { sectionStyles } from './styles/section';

@customElement('ks-skill-set')
export class KSSkillSet extends LitElement {
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
        <h2 class="chapter-title">スキルセット</h2>
        <h3 class="section-title">プログラミング言語</h3>
        <slot name="programming-language-skill"></slot>
        <h3 class="section-title">ライブラリ</h3>
        <slot name="library-skill"></slot>
        <h3 class="section-title">自然言語</h3>
        <slot name="natural-language-skill"></slot>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ks-skill-set': KSSkillSet;
  }
}
