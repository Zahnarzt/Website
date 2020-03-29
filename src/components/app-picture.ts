import {
  customElement,
  html,
  LitElement,
  property
} from 'lit-element';
import StyleAppPicture from './app-picture.css';

interface IImage {
  src?: string;
  alt?: string;
}

interface ISource {
  type: string;
  src: string;
}

@customElement('app-picture')
export class AppPicture extends LitElement {
  @property({type: Object})
  image: IImage = {};

  @property({type: Array})
  sources: Array<ISource> = [];

  static get styles() {
    return [StyleAppPicture];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <picture>
        <source
          media="(min-width: 1025px)"
          srcset="./images/index/kitten-large.png"/>
        <source
          media="(min-width: 768px)"
          srcset="./images/index/kitten-medium.png"/>
        <img src="./images/index/kitten-small.png" alt="" />
      </picture>
    `;
  }
}
