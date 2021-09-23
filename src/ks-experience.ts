import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import classNames from 'classnames';
import { chapterStyles } from './styles/chapter';
import { sectionStyles } from './styles/section';

enum ExperienceId {
  Cse = 'Cse',
  Kayac = 'Kayac',
  Grani = 'Grani',
  Goodpatch = 'Goodpatch',
  CyberAgent = 'CyberAgent',
}

@customElement('ks-experience')
export class KSExperience extends LitElement {
  @state() private _accordionViewState = new Set<string>();
  @state() private _isAllExpanded = false;

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

        h3 {
          margin: 0;
          font-size: 16px;
        }
        @media (min-width: 725px) {
          h3 {
            font-size: 24px;
          }
        }

        ol {
          list-style-type: none;
          padding: 0;
        }

        li {
          border-color: #000;
          border-style: solid;
          border-width: 0 0 1px;
          font-size: 16px;
          line-height: 1.75;
        }
        li:first-child {
          border-top-width: 1px;
        }
        @media (min-width: 725px) {
          li {
            font-size: 24px;
          }
        }

        li > a {
          display: flex;
          justify-content: space-between;
          padding: 8px 8px 8px 0;
          text-decoration: none;
        }
        @media (min-width: 725px) {
          li > a {
            padding: 16px 32px 16px 0;
          }
        }

        .experience-see-more {
          display: block;
        }

        .experience-see-more--in-visible {
          display: none;
        }
      `,
    ];
  }

  protected render() {
    return html`
      <section>
        <h2 class="chapter-title">経験</h2>
        <input
          type="checkbox"
          id="experience-all-expand"
          name="experience-all-expand"
          @click="${this._onClickExperienceAllExpandCheckbox}"
        />
        <label for="experience-all-expand">${this._isAllExpanded ? '全て非表示' : '全て表示'}</label>
        <ol>
          <li>
            <a
              id="${ExperienceId.Cse}"
              href="#cse-see-more"
              @click="${() => this._onClickAccordionItem(ExperienceId.Cse)}"
            >
              <h3>株式会社シー・エス・イー</h3>
              <span>${!(this._isAllExpanded || this._accordionViewState.has(ExperienceId.Cse)) ? '+' : '-'}</span>
            </a>
            <div
              id="cse-see-more"
              class="${classNames('experience-see-more', {
                'experience-see-more--in-visible': !(
                  this._isAllExpanded || this._accordionViewState.has(ExperienceId.Cse)
                ),
              })}"
              @click="${() => this._onClickAccordionItem(ExperienceId.Cse)}"
            >
              <slot name="cse-experience"></slot>
            </div>
          </li>
          <li>
            <a
              id="${ExperienceId.Kayac}"
              href="#kayac-see-more"
              @click="${() => this._onClickAccordionItem(ExperienceId.Kayac)}"
            >
              <h3>株式会社カヤック</h3>
              <span>${!(this._isAllExpanded || this._accordionViewState.has(ExperienceId.Kayac)) ? '+' : '-'}</span>
            </a>
            <div
              id="kayac-see-more"
              class="${classNames('experience-see-more', {
                'experience-see-more--in-visible': !(
                  this._isAllExpanded || this._accordionViewState.has(ExperienceId.Kayac)
                ),
              })}"
            >
              <slot name="kayac-experience"></slot>
            </div>
          </li>
          <li>
            <a
              id="${ExperienceId.Grani}"
              href="#grani-see-more"
              @click="${() => this._onClickAccordionItem(ExperienceId.Grani)}"
            >
              <h3>株式会社グラニ</h3>
              <span>${!(this._isAllExpanded || this._accordionViewState.has(ExperienceId.Grani)) ? '+' : '-'}</span>
            </a>
            <div
              id="grani-see-more"
              class="${classNames('experience-see-more', {
                'experience-see-more--in-visible': !(
                  this._isAllExpanded || this._accordionViewState.has(ExperienceId.Grani)
                ),
              })}"
            >
              <slot name="grani-experience"></slot>
            </div>
          </li>
          <li>
            <a
              id="${ExperienceId.Goodpatch}"
              href="#goodpatch-see-more"
              @click="${() => this._onClickAccordionItem(ExperienceId.Goodpatch)}"
            >
              <h3>株式会社グッドパッチ</h3>
              <span>${!(this._isAllExpanded || this._accordionViewState.has(ExperienceId.Goodpatch)) ? '+' : '-'}</span>
            </a>
            <div
              id="goodpatch-see-more"
              class="${classNames('experience-see-more', {
                'experience-see-more--in-visible': !(
                  this._isAllExpanded || this._accordionViewState.has(ExperienceId.Goodpatch)
                ),
              })}"
            >
              <slot name="goodpatch-experience"></slot>
            </div>
          </li>
          <li>
            <a
              id="${ExperienceId.CyberAgent}"
              href="#cyberagent-see-more"
              @click="${() => this._onClickAccordionItem(ExperienceId.CyberAgent)}"
            >
              <h3>株式会社サイバーエージェント</h3>
              <span
                >${!(this._isAllExpanded || this._accordionViewState.has(ExperienceId.CyberAgent)) ? '+' : '-'}</span
              >
            </a>
            <div
              id="cyberagent-see-more"
              class="${classNames('experience-see-more', {
                'experience-see-more--in-visible': !(
                  this._isAllExpanded || this._accordionViewState.has(ExperienceId.CyberAgent)
                ),
              })}"
            >
              <slot name="cyberagent-experience"></slot>
            </div>
          </li>
        </ol>
      </section>
    `;
  }

  private _onClickExperienceAllExpandCheckbox(): void {
    this._isAllExpanded = !this._isAllExpanded;
  }

  private _onClickAccordionItem(id: string): void {
    if (this._accordionViewState.has(id)) {
      this._accordionViewState.delete(id);
    } else {
      this._accordionViewState.add(id);
    }

    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ks-experience': KSExperience;
  }
}
