import { Injectable } from '@angular/core';
import { PageEntry } from './page-entry.model';

@Injectable()
export class PageEntriesService {

  pages: PageEntry[] = [];

  constructor() {

    this.pages = [
      {id: 'dashbaord', title: 'Accueil', component: 'dashboard', icon: 'be-assure-home', isEnabled: true},
      {id: 'folders', title: 'Dossiers', component: 'folder-list', icon: 'be-assure-folder', isEnabled: false},
      {
        id: 'complaints',
        title: 'Réclamations',
        component: 'complaint-list',
        icon: 'be-assure-complaint',
        isEnabled: false,
      },
      {
        id: 'logout',
        title: 'Se déconnecter',
        component: 'auth',
        icon: 'be-assure-logout',
        isEnabled: false,
        logout: true,
      },
    ];
  }

  getPages(): PageEntry[] {
    return this.pages;
  }
}
