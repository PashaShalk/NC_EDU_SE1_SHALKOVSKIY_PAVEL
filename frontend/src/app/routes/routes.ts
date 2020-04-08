import {LoginPageComponent} from '../pages/login/login-page.component';
import {RegistrationPageComponent} from '../pages/registration/registration-page.component';
import {FeedPageComponent} from '../pages/feed/feed-page.component';
import {AccountPageComponent} from '../pages/account/account-page.component';

export const Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'account', component: AccountPageComponent},
  {path: '', component: FeedPageComponent},
  {path: '**', redirectTo: '/login'}
];
