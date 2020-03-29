import { html, customElement, property } from 'lit-element';
import { PageViewElement } from './page-view-element';
import '../components/section-articles';
import '../components/app-content';

import Prophylaxe from '../../markdown/leistungen/prophylaxe.md';
import Zahnerhaltung from '../../markdown/leistungen/zahnerhaltung.md';
import Kinderbehandlung from '../../markdown/leistungen/kinderbehandlung.md';
import Zahnfleischbehandlung from '../../markdown/leistungen/zahnfleischbehandlung.md';
import ZahnaerztlicheChirugie from '../../markdown/leistungen/zahnaerztliche-chirugie.md';
import DysfunktioneleErkrankungen from '../../markdown/leistungen/dysfunktionele-erkrankungen.md';
import Zahnersatz from '../../markdown/leistungen/zahnersatz.md';
import AesthetischeZahnheilkunde from '../../markdown/leistungen/aesthetische-zahnheilkunde.md';
import Implantatberatung from '../../markdown/leistungen/implantatberatung.md';

interface IArticle {
  href: string;
  name: string;
}

@customElement('view-services')
export class ViewServices extends PageViewElement {
  @property({type: Array})
  private _header: string[] = [];

  @property({type: Array})
  private _articles: Array<IArticle> = [];

  constructor () {
    // Always call super() first
    super();

    // Initialize properties
    this._header = [
      'Unser Praxisspektrum',
      'Leistungen'
    ];

    this._articles = [
      {
        href: 'prophylaxe',
        name: 'Prophylaxe'
      },
      {
        href: 'zahnerhaltung',
        name: 'Zahnerhaltung'
      },
      {
        href: 'kinderbehandlung',
        name: 'Kinderbehandlung'
      },
      {
        href: 'zahnfleischbehandlung',
        name: 'Zahnfleischbehandlung'
      },
      {
        href: 'chirugie',
        name: 'Zahnärztliche Chirugie'
      },
      {
        href: 'dysfunktional',
        name: 'Behandlung dysfunktioneller Erkrankungen'
      },
      {
        href: 'zahnersatz',
        name: 'Zahnersatz'
      },
      {
        href: 'aesthetisch',
        name: 'Ästhetische Zahnheilkunde'
      },
      {
        href: 'implantatberatung',
        name: 'Implantatberatung'
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
      <app-content id="prophylaxe" content=${Prophylaxe}></app-content>
      <app-content id="zahnerhaltung" content=${Zahnerhaltung}></app-content>
      <app-content id="kinderbehandlung" content=${Kinderbehandlung}></app-content>
      <app-content id="zahnfleischbehandlung" content=${Zahnfleischbehandlung}></app-content>
      <app-content id="zahnaerztlicheChirugie" content=${ZahnaerztlicheChirugie}></app-content>
      <app-content id="dysfunktioneleErkrankungen" content=${DysfunktioneleErkrankungen}></app-content>
      <app-content id="zahnersatz" content=${Zahnersatz}></app-content>
      <app-content id="aesthetischeZahnheilkunde" content=${AesthetischeZahnheilkunde}></app-content>
      <app-content id="implantatberatung" content=${Implantatberatung}></app-content>
    `;
  }
}
