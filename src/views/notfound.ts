import { html, customElement } from 'lit-element';
import { PageViewElement } from './page-view-element';

import '../components/section-header';

@customElement('view-notfound')
export class ViewNotfound extends PageViewElement {
  protected render() {
    return html`
      <section-header>
        <h2 slot="subheadline">Oops!</h2>
        <h1 slot="headline">Seite nicht gefunden</h1>
        <p slot="text">
          404 - Diese Seite existiert nicht. Hier geht es
          <a href="/">zurück</a>.
        </p>
      </section-header>
    `
  }
}
