import { Routes } from '@angular/router';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductAddComponent } from './admin/product-add/product-add.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ProductDetailComponent } from './admin/product-detail/product-detail.component';

export const routes: Routes = [
    {path: "admin/products", component: ProductListComponent},
    {path: "admin/products/add", component: ProductAddComponent},
    {path: "admin/products/:id/edit", component: ProductEditComponent},
    {path: "admin/products/:id/detail", component: ProductDetailComponent},
];
