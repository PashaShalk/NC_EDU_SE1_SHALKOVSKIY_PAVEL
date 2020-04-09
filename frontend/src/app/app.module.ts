import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FooterComponent} from './components/footer/footer.component';
import {LoginComponent} from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {LoginPageComponent} from './pages/login/login-page.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RegistrationPageComponent} from './pages/registration/registration-page.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {PostComponent} from './components/post/post.component';
import {PostMenuComponent} from './components/post-menu/post-menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';
import {Routes} from './routes/routes';
import {FeedPageComponent} from './pages/feed/feed-page.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {ReportDialogComponent} from './components/report-dialog/report-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ImageCarouselComponent} from './components/image-carousel/image-carousel.component';
import { AccountPageComponent } from './pages/account/account-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ImagesGridListComponent } from './components/images-grid-list/images-grid-list.component';
import { AccountHeaderComponent } from './components/account-header/account-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LoginPageComponent,
    RegistrationComponent,
    RegistrationPageComponent,
    SearchBoxComponent,
    PostComponent,
    PostMenuComponent,
    FeedPageComponent,
    ReportDialogComponent,
    ImageCarouselComponent,
    AccountPageComponent,
    ImagesGridListComponent,
    AccountHeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ReportDialogComponent]
})
export class AppModule { }
