import { ProductCreateComponent } from './views/product-crud/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import { ProductByIdComponent } from './component/product/product-by-id/product-by-id.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},
{
  path:"products",
  component: ProductCrudComponent

},
{
  path: "products/create",
  component: ProductCreateComponent
},
{
  path: "products/update/:id",
  component: ProductUpdateComponent
},
{
  path: "products/byId/:id",
  component: ProductByIdComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
