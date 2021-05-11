import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias/noticias.component'
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ NoticiasComponent ],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [ NoticiasComponent ]
})
export class ComponentsModule { }
