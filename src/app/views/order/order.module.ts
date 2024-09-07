import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderDetailCoordComponent } from './order-detail-coord/order-detail-coord.component';
import { OrderListCoordComponent } from './order-list-coord/order-list-coord.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderDetailmarketCoordComponent } from './order-detailmarket-coord/order-detailmarket-coord.component';

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent,
  },
  {
    path: 'details_call',
    component: OrderDetailComponent,
  },
  {
    path: 'add_call',
    component: OrderAddComponent,
  },
  {
    path: 'details_coord',
    component: OrderDetailCoordComponent,
  },
  {
    path: 'list_coord',
    component: OrderListCoordComponent,
  },
  {
    path: 'detail_market_coord',
    component: OrderDetailmarketCoordComponent,
  },
  
];

@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailComponent,
    OrderDetailCoordComponent,
    OrderListCoordComponent,
    OrderAddComponent,
    OrderDetailmarketCoordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }
