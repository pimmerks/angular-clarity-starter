import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { WithLoadingPipe } from './pipes/with-loading.pipe';
import { ErrorAlertComponent } from './components/error-alert/error-alert.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WithLoadingPipe,
    ErrorAlertComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    WithLoadingPipe,
    ErrorAlertComponent,
  ]
})
export class SharedModule { }
