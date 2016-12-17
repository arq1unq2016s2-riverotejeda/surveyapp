import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {MessageComponent} from "./message.component";
import {DashboardComponent} from "./dashboard.component";
import {StudentsComponent} from "./students.component";
import {StudentStaticsComponent} from "./student_statics.component";
import {AuthComponent} from "./auth.component";
import {StudentCompletenessComponent} from "./student_completeness.component";
import {WelcomeComponent} from "./welcome.component";
import {OverviewComponent} from "./overview.component";
import {AuthGuard} from "./security/auth.guard";


export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'survey/:token', component: HomeComponent },
  { path: 'message', component: MessageComponent },
  { path: 'login', component: AuthComponent},
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard]},
      { path: 'students', component: StudentsComponent, canActivate: [AuthGuard] },
      { path: 'student-statics/:year', component: StudentStaticsComponent, canActivate: [AuthGuard] },
      { path: 'student-statics', component: StudentStaticsComponent, canActivate: [AuthGuard] },
      { path: 'survey-statics', component: StudentCompletenessComponent, canActivate: [AuthGuard]}
    ]
  },
  { path: '**', redirectTo: 'dashboard' }

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
