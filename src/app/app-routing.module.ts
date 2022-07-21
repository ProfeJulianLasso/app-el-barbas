// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { IndexComponent } from './pages/index/index.component';
import { EjemploComponent } from './pages/ejemplo/ejemplo.component';
import { TablaComponent } from './pages/tabla/tabla.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'ejemplo',
    component: EjemploComponent
  },
  {
    path: 'personajes',
    component: TablaComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
