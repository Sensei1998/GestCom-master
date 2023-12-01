import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from '@modules/main/main.component';
import {LoginComponent} from '@modules/login/login.component';
import {HeaderComponent} from '@modules/main/header/header.component';
import {FooterComponent} from '@modules/main/footer/footer.component';
import {MenuSidebarComponent} from '@modules/main/menu-sidebar/menu-sidebar.component';
import {CategoryComponent} from '@pages/category/category.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from '@pages/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from '@modules/register/register.component';
import {AccueilComponent} from '@pages/accueil/accueil.component';
import {ToastrModule} from 'ngx-toastr';
import {MessagesComponent} from '@modules/main/header/messages/messages.component';
import {NotificationsComponent} from '@modules/main/header/notifications/notifications.component';
import {CommonModule, registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {UserComponent} from '@modules/main/header/user/user.component';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {LanguageComponent} from '@modules/main/header/language/language.component';
import {MainMenuComponent} from './pages/main-menu/main-menu.component';
import {ClientsComponent} from './pages/main-menu/clients/clients.component';
import {MenuItemComponent} from './components/menu-item/menu-item.component';
import {ControlSidebarComponent} from './modules/main/control-sidebar/control-sidebar.component';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './store/auth/reducer';
import {uiReducer} from './store/ui/reducer';
import {ProfabricComponentsModule} from '@profabric/angular-components';
import {SidebarSearchComponent} from './components/sidebar-search/sidebar-search.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { SubArticlesComponent } from './pages/articles/sub-articles/sub-articles.component';
import { BoutonActionComponent } from './components/bouton-action/bouton-action.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { NouvelArticleComponent } from './pages/page-articles/nouvel-article/nouvel-article.component';
import { SubMvtskComponent } from './pages/articles/sub-mvtsk/sub-mvtsk.component';
import { DetailMvtStkArticleComponent } from './components/detail-mvt-stk-article/detail-mvt-stk-article.component';
import { DetailMvtStkComponent } from './components/detail-mvt-stk/detail-mvt-stk.component';
import { DetailClientsComponent } from './components/detail-clients/detail-clients.component';
import { CommandesClientsComponent } from './pages/main-menu/commandes-clients/commandes-clients.component';
import { DetailCmdClientsComponent } from './components/detail-cmd-clients/detail-cmd-clients.component';
import { DetailCmdFnsComponent } from './components/detail-cmd-fns/detail-cmd-fns.component';
import { DetailFournisseursComponent } from './components/detail-fournisseurs/detail-fournisseurs.component';
import { PagesFournisseursComponent } from './pages/pages-fournisseurs/pages-fournisseurs.component';
import { FournisseursComponent } from './pages/pages-fournisseurs/fournisseurs/fournisseurs.component';
import { CommandesFournisseursComponent } from './pages/pages-fournisseurs/commandes-fournisseurs/commandes-fournisseurs.component';
import { NouvelClientComponent } from './components/nouvel-client/nouvel-client.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { DetailUtilisateurComponent } from './components/detail-utilisateur/detail-utilisateur.component';
import { UtilisateurComponent } from '@pages/utilisateur/utilisateur.component';
import { NouvelCategoryComponent } from './pages/category/nouvel-category/nouvel-category.component';
import { NouvelleCmdClientComponent } from './components/nouvelle-cmd-client/nouvelle-cmd-client.component';
import { NouvelleCmdFournisseursComponent } from './components/nouvelle-cmd-fournisseurs/nouvelle-cmd-fournisseurs.component';
import { NouvelFournisseurComponent } from './components/nouvel-fournisseur/nouvel-fournisseur.component';
import { DetailCmdComponent } from './components/detail-cmd/detail-cmd.component';
import { FactureComponent } from './pages/facture/facture.component';
import { DetailFactureComponent } from './components/detail-facture/detail-facture.component';
import { DetailFactureCltComponent } from './components/detail-facture-clt/detail-facture-clt.component';
import { DetailBcmdClientsComponent } from './components/detail-bcmd-clients/detail-bcmd-clients.component';
import { DetailBcmdFnsComponent } from './components/detail-bcmd-fns/detail-bcmd-fns.component';
import { ProFactureComponent } from './pages/pro-facture/pro-facture.component';
import { ProformaComponent } from './pages/proforma/proforma.component';
import { DetailProformaComponent } from './components/detail-proforma/detail-proforma.component';
import { DetailDetailComponent } from './components/detail-detail/detail-detail.component';
import { PageDetailComponent } from './pages/page-detail/page-detail.component';
import { NouveauProformaComponent } from './components/nouveau-proforma/nouveau-proforma.component';
import { NouveauFactureComponent } from './components/nouveau-facture/nouveau-facture.component';


registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        ProfileComponent,
        RegisterComponent,
        AccueilComponent,
        MessagesComponent,
        NotificationsComponent,
        UserComponent,
        ForgotPasswordComponent,
        RecoverPasswordComponent,
        LanguageComponent,
        MainMenuComponent,
        ClientsComponent,
        MenuItemComponent,
        ControlSidebarComponent,
        SidebarSearchComponent,
        ArticlesComponent,
        SubArticlesComponent,
        BoutonActionComponent,
        PaginationComponent,
        DetailArticleComponent,
        NouvelArticleComponent,
        SubMvtskComponent,
        DetailMvtStkArticleComponent,
        DetailMvtStkComponent,
        DetailClientsComponent,
        CommandesClientsComponent,
        DetailCmdClientsComponent,
        DetailCmdFnsComponent,
        DetailFournisseursComponent,
        PagesFournisseursComponent,
        FournisseursComponent,
        CommandesFournisseursComponent,
        NouvelClientComponent,
        CategoryComponent,
        NouvelUtilisateurComponent,
        DetailUtilisateurComponent,
        UtilisateurComponent,
        NouvelCategoryComponent,
        NouvelleCmdClientComponent,
        NouvelleCmdFournisseursComponent,
        NouvelFournisseurComponent,
        DetailCmdComponent,
        FactureComponent,
        DetailFactureComponent,
        DetailFactureCltComponent,
        DetailBcmdClientsComponent,
        DetailBcmdFnsComponent,
        ProFactureComponent,
        ProformaComponent,
        DetailProformaComponent,
        DetailDetailComponent,
        PageDetailComponent,
        NouveauProformaComponent,
        NouveauFactureComponent
       
       
    ],
    imports: [
        ProfabricComponentsModule,
        CommonModule,
        BrowserModule,
        StoreModule.forRoot({auth: authReducer, ui: uiReducer}),
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
