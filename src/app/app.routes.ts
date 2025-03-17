import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { CounterComponent } from './components/counter/counter.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EventsComponent } from './components/events/events.component';
import { RoutingComponent } from './components/routing/routing.component';

export const routes: Routes = [
    {path:'forms', component:FormComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'counter', component:CounterComponent},
    {path:'user/:id/:name', component:EventsComponent},
    {path:'', component:RoutingComponent},
    {path:'**', component:PageNotFoundComponent}
];
