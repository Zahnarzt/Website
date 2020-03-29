import { html, customElement, property } from 'lit-element';
import { PageViewElement } from './page-view-element';
import '../components/section-articles';
import '../components/app-content';

import Corona from '../../markdown/aktuelles/corona.md';
import Abschied from '../../markdown/aktuelles/abschied.md';

interface IArticle {
  href: string;
  name: string;
}

@customElement('view-news')
export class ViewNews extends PageViewElement {
  @property({type: Array})
  private _header: string[] = [];

  @property({type: Array})
  private _articles: Array<IArticle> = [];

  constructor () {
    // Always call super() first
    super();

    // Initialize properties
    this._header = [
      'Rund um die Praxis',
      'Aktuelles'
    ];

    this._articles = [
      {
        href: 'corona',
        name: 'Corona'
      },
      {
        href: 'abschied',
        name: 'Abschied Herr Dr. Jansen'
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
      <app-content id="corona" content=${Corona}></app-content>
      <app-content id="abschied" content=${Abschied}></app-content>
    `;
  }
}
