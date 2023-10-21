import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './pages/lista/lista.component';
import { CreateItemComponent } from './pages/create-item/create-item.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'lista', pathMatch:'full' },
  { path: '', component: ListaComponent },
  { path: 'create-item', component: CreateItemComponent},
  { path: 'edit-item/:id', component: EditItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
