import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { DialogBoxComponent } from '../components/dialog-box.modal/dialog-box.modal';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [],
  imports: [ IonicModule ],
  exports: [ComponentsModule ],
  providers: []
})
export class SharedModule {}
