import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//     { path: '', component: HomeComponent },
//     { path: 'api-create', component: CreateApiComponent },
//     { path: 'api-display-all', component: ReadApisComponent },
//     { path: 'api-display/:id', component: ReadApiComponent },
//     { path: 'api-edit/:id', component: UpdateApiComponent },
//     { path: '**', component: NotFoundComponent }
// ];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }