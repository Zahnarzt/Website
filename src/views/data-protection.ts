import { html, customElement } from 'lit-element';
import { PageViewElement } from './page-view-element';

import '../components/section-header';
import '../components/app-content';

import Datenschutz from '../../markdown/datenschutz/datenschutz.md';

@customElement('view-dataprotection')
export class ViewDataProtection extends PageViewElement {
  protected render() {
    return html`
      <section-header>
        <h1 slot="headline">Datenschutz</h1>
      </section-header>
      <app-content id="datenschutz" content=${Datenschutz}></app-content>
    `
  }
}
