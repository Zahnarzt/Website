import { html, customElement } from 'lit-element';
import { PageViewElement } from './page-view-element';

import '../components/section-intro';
import '../components/app-content';

import MdIntro from '../../markdown/index/content.md';

@customElement('view-index')
export class ViewIndex extends PageViewElement {
  protected render() {
    return html`
      <section-intro></section-intro>
      <app-content content=${MdIntro}></app-content>
    `;
  }
}
