import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from "../components/components.module";
import { ReactiveFormsModule } from '@angular/forms';
import { EditItemComponent } from './edit-item/edit-item.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';


@NgModule({
    declarations: [
        ListaComponent,
        CreateItemComponent,
        EditItemComponent,
        RegisterComponent,
        LoginComponent,
        MainComponent
    ],
    exports: [
        ListaComponent,
        CreateItemComponent,
        EditItemComponent,
        RegisterComponent,
        LoginComponent,
        MainComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        ComponentsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ]
})
export class PagesModule { }
