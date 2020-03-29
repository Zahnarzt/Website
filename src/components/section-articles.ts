import {
  customElement,
  html,
  LitElement,
  property
} from 'lit-element';
import StyleGrid from './css-grid.css';
import Style from './section-articles.css';

interface IArticle {
  href: string;
  name: string;
}

@customElement('section-articles')
export class SectionArticles extends LitElement {
  @property({type: Array})
  header: Array<string> = [];

  @property({type: Array})
  articles: Array<IArticle> = [];

  static get styles() {
    return [
      StyleGrid,
      Style
    ];
  }

  render() {
    const subheadline = this.header[0];
    const headline = this.header[1];

    return html`
      <section class="grid-container grid-container--about">
        <header>
          <h2>${subheadline}</h2>
          <h1>${headline}</h1>
        </header>
        <div class="box box-one">
          <h4>Inhalt</h4>
          <ul>
          ${this.articles.map((article) =>
            html`
              <li>
                <a href=${article.href}>${article.name}</a>
              </li>
            `
          )}
          </ul>
        </div>
        <app-picture class="picture"></app-picture>
      </section>
    `;
  }
}

