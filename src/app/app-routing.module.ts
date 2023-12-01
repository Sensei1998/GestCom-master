import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';
import { CategoryComponent} from '@pages/category/category.component';
import {LoginComponent} from '@modules/login/login.component';
import {ProfileComponent} from '@pages/profile/profile.component';
import {RegisterComponent} from '@modules/register/register.component';
import {AccueilComponent, } from '@pages/accueil/accueil.component';
import {AuthGuard} from '@guards/auth.guard';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {MainMenuComponent} from '@pages/main-menu/main-menu.component';
import {ClientsComponent} from '@pages/main-menu/clients/clients.component';
import { SubArticlesComponent } from '@pages/articles/sub-articles/sub-articles.component';
import { ArticlesComponent } from '@pages/articles/articles.component';
import { SubMvtskComponent } from '@pages/articles/sub-mvtsk/sub-mvtsk.component';
import { CommandesClientsComponent } from '@pages/main-menu/commandes-clients/commandes-clients.component';
import { FournisseursComponent } from '@pages/pages-fournisseurs/fournisseurs/fournisseurs.component';
import { CommandesFournisseursComponent } from '@pages/pages-fournisseurs/commandes-fournisseurs/commandes-fournisseurs.component';
import { NouvelArticleComponent } from '@pages/page-articles/nouvel-article/nouvel-article.component';
import { NouvelClientComponent } from '@components/nouvel-client/nouvel-client.component';
import { NouvelUtilisateurComponent } from '@pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { UtilisateurComponent } from '@pages/utilisateur/utilisateur.component';
import { NouvelCategoryComponent } from '@pages/category/nouvel-category/nouvel-category.component';
import { NouvelleCmdClientComponent } from '@components/nouvelle-cmd-client/nouvelle-cmd-client.component';
import { NouvelFournisseurComponent } from '@components/nouvel-fournisseur/nouvel-fournisseur.component';
import { NouvelleCmdFournisseursComponent } from '@components/nouvelle-cmd-fournisseurs/nouvelle-cmd-fournisseurs.component';
import { FactureComponent } from '@pages/facture/facture.component';
import { ProFactureComponent } from '@pages/pro-facture/pro-facture.component';
import { ProformaComponent } from '@pages/proforma/proforma.component';
import { PageDetailComponent } from '@pages/page-detail/page-detail.component';
import { NouveauProformaComponent } from '@components/nouveau-proforma/nouveau-proforma.component';
import { NouveauFactureComponent } from '@components/nouveau-facture/nouveau-facture.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'category',
                component: CategoryComponent
            },
            {
                path: 'nouvelleCategory',
                component: NouvelCategoryComponent 
            },
            {
                path: 'clients',
                component: ClientsComponent
            },
            {
                path: 'commandes-clients',
                component: CommandesClientsComponent
            },
            {
                path: 'fournisseurs',
                component: FournisseursComponent
            },
            {
                path: 'commandes-fournisseurs',
                component: CommandesFournisseursComponent
            },
            {
                path: 'articles',
                component: ArticlesComponent
            },
            {
                path: 'nouvelarticle',
                component: NouvelArticleComponent
            },
            {
                path: 'sub-articles-1',
                component: SubArticlesComponent
            },
            {
                path: 'sub-articles-2',
                component: SubMvtskComponent
            },
            {
                path: '',
                component: AccueilComponent
            },
            {
                path: 'nouveauClient',
                component: NouvelClientComponent
            },
            {
                path: 'nouvelFournisseur',
                component: NouvelFournisseurComponent
            },
            
            {
                path: 'nouvelleCmdClient',
                component: NouvelleCmdClientComponent
            },
            {
                path: 'nouvelleCmdFournisseur',
                component: NouvelleCmdFournisseursComponent
            },
            {
                path: 'utilisateur',
                component: UtilisateurComponent 
            },
            {
                path: 'nouvelUtilisateur',
                component: NouvelUtilisateurComponent 
            },
            {
                path: 'facture/:id',
                component: FactureComponent 
            },
            {
                path: 'proFacture/:id',
                
                component: ProFactureComponent 
            },
            // {
            //     path: 'proFacture/:id ',
            //     component: ProFactureComponent 
            // },
            {
                path: 'proforma/:id',
                component: ProformaComponent 
            },
            {
                path: 'pageDetail',
                component: PageDetailComponent 
            },
            {
                path: 'nouveauProforma',
                component: NouveauProformaComponent 
            },
            {
                path: 'nouveauFacture',
                component: NouveauFactureComponent 
            },
           
             
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'recover-password',
        component: RecoverPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
