import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//Auth
import { provideAuth0 } from '@auth0/auth0-angular';

// Angular/Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

//dialog
import { MatDialogModule } from '@angular/material/dialog';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

// Modules

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    AuthButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
  ],
  providers: [
    //{ provide: APP_ID, useValue: 'my-app' },
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAuth0({
      domain: 'dev-nsc7dienu8o1ta8a.us.auth0.com',
      clientId: 'NTbUDXfC1Nyaqdw0HPim8yawKZ7E5NP5',
      authorizationParams: {
        redirect_uri: 'localhost:4200',
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
