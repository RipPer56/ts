import { Injectable } from '@angular/core';
import { HorizontalMenuItemsModel } from './horizontal-menu-items.model';

@Injectable()
export class HorizontalMenuService {
  private menuItems: HorizontalMenuItemsModel[];

  constructor() {
    this.menuItems = [{
      ionCardClass: "menu-item",
      ionIconName: "my-menu-sinistre",
      labelClass: "menu-item-title",
      title: 'Mes dossiers',
      component: 'folder-list',
    },
      {
        ionCardClass: "menu-item selected",
        ionIconName: "my-menu-accueil",
        labelClass: "menu-item-title",
        title: 'Accueil',
        component: 'dashboard',

      },
      {
        ionCardClass: "menu-item",
        ionIconName: "my-menu-complaint",
        labelClass: "menu-item-title",
        title: 'Mes réclamations',
        component: 'complaint-list',
      }];
  }

  getItems(): HorizontalMenuItemsModel[] {
    return this.menuItems;
  }

}
