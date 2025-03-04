import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHooksComponent,
    DirectivesComponent,
    DataBindingComponent,
    PipesComponent, 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
