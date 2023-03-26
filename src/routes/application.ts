import { html, LitElement, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@vaadin/app-layout';

/**
 * The main application layout.
 */
@customElement('application-route')
export class ApplicationRoute extends LitElement {


  render(): TemplateResult {
    return html` <vaadin-app-layout>
      <div class="navbar-layout" slot="navbar">
        <div class="left-navbar">
          Catur
        </div>
      </div>

      <slot></slot>
    </vaadin-app-layout>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'application-route': ApplicationRoute;
  }
}


