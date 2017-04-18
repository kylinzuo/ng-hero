import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard }  from './auth-guard.service';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterHomeComponent } from './crisis-list/crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-list/crisis-detail/crisis-detail.component';

const crisisCenterRoutes: Routes = [
  {
    path: 'crisis',
    component: CrisisCenterComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: '',
            component: CrisisCenterHomeComponent,
          },
          {
            path: ':id',
            component: CrisisDetailComponent
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})

export class CrisisCenterRoutingModule { }