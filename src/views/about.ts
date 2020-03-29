import { html, customElement, property } from 'lit-element';
import { PageViewElement } from './page-view-element';
import '../components/section-articles';
import '../components/app-content';

import DrHilgner from '../../markdown/about/dr-hilgner.md';
import DrVogt from '../../markdown/about/dr-vogt.md';
import Team from '../../markdown/about/team.md';
import Labor from '../../markdown/about/labor.md';

interface IArticle {
  href: string;
  name: string;
}

@customElement('view-about')
export class ViewAbout extends PageViewElement {
  @property({type: Array})
  private _header: string[] = [];

  @property({type: Array})
  private _articles: Array<IArticle> = [];

  constructor () {
    // Always call super() first
    super();

    // Initialize properties
    this._header = [
      'Lernen Sie uns kennen',
      'Über uns'
    ];

    this._articles = [
      {
        href: 'hilgner',
        name: 'Dr. Karina Hilgner'
      },
      {
        href: 'vogt',
        name: 'Dr. Benjamin Vogt'
      },
      {
        href: 'team',
        name: 'Unser Team'
      },
      {
        href: 'labor',
        name: 'Labor'
      }
    ]
  }

  protected render() {
    return html`
      <section-articles
        .header=${this._header}
        .articles=${this._articles}
      >
      </section-articles>
      <app-content id="drhilgner" content=${DrHilgner}></app-content>
      <app-content id="drvogt" content=${DrVogt}></app-content>
      <app-content id="team" content=${Team}></app-content>
      <app-content id="labor" content=${Labor}></app-content>
    `;
  }
}
