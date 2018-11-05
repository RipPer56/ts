import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { HorizontalMenuItemsModel } from './horizontal-menu-items.model';
import { HorizontalMenuService } from './horizontal-menu.service';

@Component({
  selector: 'ba-horizontal-menu',
  templateUrl: 'horizontal-menu.html',
})
export class HorizontalMenuComponent {
  private menuItems: HorizontalMenuItemsModel[] = [];


  constructor(private horizontalMenuService: HorizontalMenuService,
              private app: App,
              private navCtrl: NavController) {
    this.menuItems = this.horizontalMenuService.getItems();
  }

  get isMenuHorizontal(): boolean {
    return (this.app !== undefined) && (this.app.getActiveNavs() !== undefined) && (this.app.getActiveNavs().length !== 0) && (this.app.getActiveNavs()[0].getActive() !== undefined);
  }

  clickMenuItem(item: HorizontalMenuItemsModel) {
    this.navCtrl.setRoot(item.component);
  }

}
