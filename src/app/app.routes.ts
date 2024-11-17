import { Routes } from '@angular/router';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductAddComponent } from './admin/product-add/product-add.component';

export const routes: Routes = [
    {path: "admin/products", component: ProductListComponent},
    {path: "admin/products/add", component: ProductAddComponent},
];
