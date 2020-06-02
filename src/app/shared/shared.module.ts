import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { WithLoadingPipe } from './pipes/with-loading.pipe';
import { ErrorAlertComponent } from './components/error-alert/error-alert.component';
import { CenterCardComponent } from './components/center-card/center-card.component';

@NgModule({
  declarations: [
    WithLoadingPipe,
    ErrorAlertComponent,
    CenterCardComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
  ],
  exports: [
    WithLoadingPipe,
    ErrorAlertComponent,
    CenterCardComponent,
  ]
})
export class SharedModule { }
