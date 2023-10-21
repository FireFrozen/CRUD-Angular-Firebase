import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from "../components/components.module";
import { ReactiveFormsModule } from '@angular/forms';
import { EditItemComponent } from './edit-item/edit-item.component';


@NgModule({
    declarations: [
        ListaComponent,
        CreateItemComponent,
        EditItemComponent
    ],
    exports: [
        ListaComponent,
        CreateItemComponent,
        EditItemComponent
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
