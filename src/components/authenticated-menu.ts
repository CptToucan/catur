import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {User, getAuth, signOut} from 'firebase/auth';
import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/tabs';
import '@vaadin/context-menu';
import '@vaadin/app-layout';
import {Router} from '@vaadin/router';
import { ContextMenuItem, ContextMenuItemSelectedEvent } from '@vaadin/context-menu';
import { notificationService } from '../services/notification';

interface MenuItem {
  name: string;
  icon: string;
  href: string;
}

/// Create a single menu item
type MenuItemRenderer = (menuItem: MenuItem) => TemplateResult;

/// Menu definition indicating an ordered list of items per user authentication type
type MenuDefinition = {
  user: MenuItem[];
  guest: MenuItem[];
};

/// Default menu definitions per authentication level.
const defaultMenu: MenuDefinition = {
  user: [
    {
      name: 'Home',
      icon: 'vaadin:dashboard',
      href: '/',
    },
    {
      name: 'Units',
      icon: 'vaadin:user-star',
      href: '/units',
    },
    {
      name: 'Unit',
      icon: 'vaadin:dashboard',
      href: '/',
    },
  ],
  guest: [
    {
      name: 'Home',
      icon: 'vaadin:dashboard',
      href: '/',
    },
    {
      name: 'Units',
      icon: 'vaadin:dashboard',
      href: '/units/',
    },
  ]
};

@customElement('authenticated-menu')
export class AuthenticatedMenu extends LitElement {
  static get styles() {
    return css`
      h1 {
        font-size: var(--lumo-font-size-l);
        margin: 0;
      }

      vaadin-icon.drawer-icon {
        box-sizing: border-box;
        margin-inline-end: var(--lumo-space-m);
        margin-inline-start: var(--lumo-space-xs);
        padding: var(--lumo-space-xs);
      }

      .navbar-layout {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        padding-right: var(--lumo-space-s);
      }
    `;
  }

  /// Authenticated user ?? guest
  @property()
  user?: User;

  /// Defines the content of the menu
  @property()
  menuDefinition: MenuDefinition = defaultMenu;

  renderMenuItem: MenuItemRenderer = (menuItem) => {
    return html`
      <vaadin-tab>
        <a tabindex="-1" href="${menuItem.href}">
          <vaadin-icon
            class="drawer-icon"
            icon="${menuItem.icon}"
          ></vaadin-icon>
          <span>${menuItem.name}</span>
        </a>
      </vaadin-tab>
    `;
  };

  items(): MenuItem[] {
    return this.user ? this.menuDefinition.user : this.menuDefinition.guest;
  }

  getLoggedInContextMenuItems(): ContextMenuItem[] {
    return [{text: 'Logout'}]
  }

  async contextMenuItemSelected(event: ContextMenuItemSelectedEvent) {
    if(event.detail.value.text === "Logout") {
      const auth = getAuth();
      await signOut(auth);
      Router.go('/login');

      notificationService.instance?.addNotification({
        duration: 3000,
        content: "Successfully logged out",
        theme: 'success',
      });
    }
  }

  renderAccountButton(): TemplateResult {
    if (this.user) {
      return html` <vaadin-context-menu
      @item-selected=${this.contextMenuItemSelected}
        open-on="click"
        .items=${this.getLoggedInContextMenuItems()}
      >
        <vaadin-button theme="tertiary" aria-label="Account">
          <vaadin-icon icon="vaadin:user"></vaadin-icon>
        </vaadin-button>
      </vaadin-context-menu>`;
    } else {
      return html` <vaadin-button
        theme="tertiary"
        aria-label="Sign in"
        @click=${() => {
          Router.go('/login');
        }}
      >
        <vaadin-icon icon="vaadin:sign-in"></vaadin-icon>
      </vaadin-button>`;
    }
    return html``;
  }

  render(): TemplateResult {
    const menu: TemplateResult[] = this.items().map((item) =>
      this.renderMenuItem(item)
    );

    return html` <vaadin-app-layout style="height: 100%;" theme="small">
      <vaadin-drawer-toggle slot="navbar"></vaadin-drawer-toggle>
      <div class="navbar-layout" slot="navbar">
        <h1>WarYes</h1>
        ${this.renderAccountButton()}
      </div>

      <vaadin-tabs slot="drawer" orientation="vertical"> ${menu} </vaadin-tabs>

      <slot></slot>
    </vaadin-app-layout>`;
  }
}

/**
 *     <vaadin-button aria-label="Sign in" theme="icon" ><vaadin-icon icon="vaadin:sign-in"></vaadin-icon></vaadin-button>
 */