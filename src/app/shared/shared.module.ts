import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { WithLoadingPipe } from './pipes/with-loading.pipe';
import { CenterCardComponent } from './components/center-card/center-card.component';

@NgModule({
  declarations: [
    WithLoadingPipe,
    CenterCardComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
  ],
  exports: [
    WithLoadingPipe,
    CenterCardComponent,
  ]
})
export class SharedModule { }
