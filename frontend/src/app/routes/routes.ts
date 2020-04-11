import {LoginPageComponent} from '../pages/login/login-page.component';
import {RegistrationPageComponent} from '../pages/registration/registration-page.component';
import {FeedPageComponent} from '../pages/feed/feed-page.component';
import {AccountPageComponent} from '../pages/account/account-page.component';
import {HashtagPageComponent} from '../pages/hashtag-page/hashtag-page.component';

export const Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'account', component: AccountPageComponent},
  {path: 'hashtag', component: HashtagPageComponent},
  {path: '', component: FeedPageComponent},
  {path: '**', redirectTo: '/login'}
];
