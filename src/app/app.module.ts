//app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { TaskFilterPipe } from './task-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomeComponent } from   './containers/home/home.component';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminPageComponent } from './containers/admin-page/admin-page.component';
import { EmailComponent } from './components/email/email.component';
import { ManageTasksComponent } from './components/manage-tasks/manage-tasks.component';
import { ManagePersonsComponent } from './components/manage-persons/manage-persons.component';
import { CommunicationService } from './services/CommunicationService';
import { PetalComponent } from './components/petal/petal.component';
import { ChoosePersonComponent } from './components/choose-person/choose-person.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { WelcomePopupComponent } from './components/welcome-popup/welcome-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFilterPipe,
    HomeComponent,
    ConfirmDialogComponent,
    AdminPageComponent,
    EmailComponent,
    ManageTasksComponent,
    ManagePersonsComponent,
    PetalComponent,
    ChoosePersonComponent,
    WelcomePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    FormsModule,
    MatTooltipModule,
    MatDialogModule,
    CommonModule,
    MatSidenavModule
  ],
  providers: [CommunicationService, { provide: Window, useValue: window }],
  bootstrap: [AppComponent],

  entryComponents: [],
})
export class AppModule {}
