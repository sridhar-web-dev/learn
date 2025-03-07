import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { RouterModule } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHooksComponent,
    DirectivesComponent,
    DataBindingComponent,
    PipesComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, RouterModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
