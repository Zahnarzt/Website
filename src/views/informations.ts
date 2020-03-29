import { html, customElement, property } from 'lit-element';
import { PageViewElement } from './page-view-element';
import '../components/section-articles';
import '../components/app-content';

import Formulare from '../../markdown/informationen/formulare.md';
import Zahnzusatz from '../../markdown/informationen/zahnzusatz.md';

interface IArticle {
  href: string;
  name: string;
}

@customElement('view-informations')
export class ViewInformations extends PageViewElement {
  @property({type: Array})
  private _header: string[] = [];

  @property({type: Array})
  private _articles: Array<IArticle> = [];

  constructor () {
    // Always call super() first
    super();

    // Initialize properties
    this._header = [
      'Praktische Hinweise',
      'Informationen'
    ];

    this._articles = [
      {
        href: 'download',
        name: 'Download'
      },
      {
        href: 'zahnzusatzversicherung',
        name: 'Zahnzusatzversicherung'
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
      <app-content id="formulare" content=${Formulare}></app-content>
      <app-content id="zahnzusatz" content=${Zahnzusatz}></app-content>
    `;
  }
}
