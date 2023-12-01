import {AppState} from '@/store/state';
import {UiState} from '@/store/ui/state';
import {Component, HostBinding, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppService} from '@services/app.service';
import {Observable} from 'rxjs';

const BASE_CLASSES = 'main-sidebar elevation-4';
@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    @HostBinding('class') classes: string = BASE_CLASSES;
    public ui: Observable<UiState>;
    public user;
    public menu = MENU;

    constructor(
        public appService: AppService,
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        this.ui = this.store.select('ui');
        this.ui.subscribe((state: UiState) => {
            this.classes = `${BASE_CLASSES} ${state.sidebarSkin}`;
        });
        this.user = this.appService.user;
    }
}

export const MENU = [
    {
        name: 'Accueil',
        iconClasses: 'fas fa-tachometer-alt',
        path: ['/']
    },
   
    {
        name: 'Clients',
        iconClasses: 'fas fa-users',        
        children: [
            {
                name: 'Liste des clients',
                iconClasses: 'far fa-address-book',
                path: ['/clients']
            },
            {
                name: 'Bon de commande des clients',
                iconClasses: 'fas fa-shopping-basket',
                path: ['/commandes-clients']
            }
        ]
    },
    {
        name: 'Fournisseurs',
        iconClasses: 'fas fa-users',        
        children: [
            {
                name: 'Liste des fournisseurs',
                iconClasses: 'far fa-address-book',
                path: ['/fournisseurs']
            },
            {
                name: 'Bon de commande aux fournisseurs',
                iconClasses: 'fas fa-shopping-basket',
                path: ['/commandes-fournisseurs']
            }
        ]
    },
    {
        name: 'Articles',
        iconClasses: 'fas fa-boxes',        
        children: [
            {
                name: 'Articles',
                iconClasses: 'far fa-address-book',
                path: ['/sub-articles-1']
            },
            {
                name: 'Mouvements de stock',
                iconClasses: 'fab fa-stack-overflow',
                path: ['/sub-articles-2']
            },
            
        ]
    },
    // {
    //     name: 'Catégories',
    //     iconClasses: 'fas fa-file',
    //     path: ['/category']
    // },
   
    {
        name: 'Utilisateur',
        iconClasses: 'fas fa-file',
        path: ['/utilisateur']
    },
    

];
