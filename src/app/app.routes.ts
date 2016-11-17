import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {MessageComponent} from "./message.component";
import {DashboardComponent} from "./dashboard.component";
import {StudentsComponent} from "./students.component";
import {StudentStaticsComponent} from "./student_statics.component";
import {OverviewComponent} from "./overview.component";


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'message', component: MessageComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent},
      { path: 'students', component: StudentsComponent },
      { path: 'student-statics', component: StudentStaticsComponent },
      { path: 'survey-statics', component: StudentStaticsComponent} //cambiar por el componente de encuestas
    ]
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
