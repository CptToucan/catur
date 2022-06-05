import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {UnitService} from '../services/unit';
import {until} from 'lit/directives/until.js';
import {WarnoUnit} from '../types';

@customElement('unit-details-route')
export class UnitDetailsRoute extends LitElement {
  static get styles() {
    return css``;
  }

  protected createRenderRoot() {
    return this;
  }

  @property()
  unitId?: string;

  async fetchUnit(): Promise<WarnoUnit | null> {
    if (this.unitId) {
      const unit = await UnitService.getUnit(this.unitId);
      return unit;
    }

    return null;
  }

  async renderUnit(): Promise<TemplateResult> {
    const unit: WarnoUnit | null = await this.fetchUnit();

    if (unit) {
      return html`<unit-details-card .unit=${unit}></unit-details-card>`;
    }

    return html``;
  }

  render() {
    return html`
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col>
              ${until(this.renderUnit(), html`Loading...`)}
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    `;
  }
}