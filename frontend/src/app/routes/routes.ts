import {LoginPageComponent} from '../pages/login/login-page.component';
import {RegistrationPageComponent} from '../pages/registration/registration-page.component';
import {FeedPageComponent} from '../pages/feed/feed-page.component';

export const Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: '', component: FeedPageComponent},
  {path: '**', redirectTo: '/login'}
];
