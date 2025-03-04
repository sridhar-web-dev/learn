import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipesComponent } from './pipes/pipes.component';
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent,
  },
  {
    path: 'life-cycle-hooks',
    component: LifeCycleHooksComponent
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: '**', redirectTo: ''
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
