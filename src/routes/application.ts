import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@vaadin/app-layout';

/**
 * The main application layout.
 */
@customElement('application-route')
export class ApplicationRoute extends LitElement {
  static get styles() {
    return css`
      h1 {
        font-size: var(--lumo-font-size-l);
        margin: var(--lumo-space-m);
      }
    `;
  }
  render(): TemplateResult {
    return html` <vaadin-app-layout>
      <h1 slot="navbar">Catur</h1>

      <slot></slot>
    </vaadin-app-layout>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'application-route': ApplicationRoute;
  }
}
