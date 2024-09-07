import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { StocksComponent } from './stocks/stocks.component';
import { PostComponent } from './post/post.component';
import { FinishComponent } from './finish/finish.component';
import { InactifsComponent } from './inactifs/inactifs.component';

const routes: Routes = [
  {
    path: '',
    component: NewComponent,
  },
  {
    path: 'stock',
    component: StocksComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: 'finish',
    component: FinishComponent,
  },
  {
    path: 'Inactif',
    component: InactifsComponent,
  },
 
];

@NgModule({
  declarations: [
    NewComponent,
    StocksComponent,
    PostComponent,
    FinishComponent,
    InactifsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
