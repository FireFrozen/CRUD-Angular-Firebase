import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './pages/lista/lista.component';
import { CreateItemComponent } from './pages/create-item/create-item.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard'

const routes: Routes = [
  //{ path: '', redirectTo: '/lista', pathMatch:'full' },
  { path: '', component: MainComponent },
  { 
    path: 'lista',
    component: ListaComponent,
    ...canActivate(()=>redirectUnauthorizedTo(['/login'])) 
  },
  { path: 'lista/create-item', component: CreateItemComponent},
  { path: 'lista/edit-item/:id', component: EditItemComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
