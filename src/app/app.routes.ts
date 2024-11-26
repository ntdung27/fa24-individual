import { Routes } from '@angular/router';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ProductAddComponent } from './admin/product-add/product-add.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ProductDetailComponent } from './admin/product-detail/product-detail.component';
import { SignupComponent } from './admin/signup/signup.component';
import { SigninComponent } from './admin/signin/signin.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: "admin/products", component: ProductListComponent},
    {path: "admin/products/add", component: ProductAddComponent, canActivate:[authGuard]},
    {path: "admin/products/:id/edit", component: ProductEditComponent},
    {path: "admin/products/:id/detail", component: ProductDetailComponent},
    {path: "signup", component: SignupComponent},
    {path: "signin", component: SigninComponent}
];
