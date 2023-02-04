import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';

// @ts-ignore;
import EastGermany from '../../images/flags/east-germany.svg';
// @ts-ignore;
import France from '../../images/flags/france.svg';
// @ts-ignore;
import SovietUnion from '../../images/flags/soviet-union.svg';
// @ts-ignore;
import UK from '../../images/flags/uk.svg';
// @ts-ignore;
import USA from '../../images/flags/usa.svg';
// @ts-ignore;
import WestGermany from '../../images/flags/west-germany.svg';
import { Country } from '../types/deck-builder';

@customElement('country-flag')
export class CountryFlag extends LitElement {
  static get styles() {
    return css``;
  }

  @property()
  country?: Country;

  render(): TemplateResult {
    let image = '';
    switch (this.country) {
      case Country.DDR:
        image = EastGermany;
        break;
      case Country.FR:
        image = France;
        break;
      case Country.SOV:
        image = SovietUnion;
        break;
      case Country.UK:
        image = UK;
        break;
      case Country.US:
        image = USA;
        break;
      case Country.RFA:
        image = WestGermany;
        break;
    }
    return html`<img width="40" src=${image} />`;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'country-flag': CountryFlag;
  }
}