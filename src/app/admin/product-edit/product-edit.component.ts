import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
    form: any;
    constructor(private http: HttpClient, private router: Router, private activeRoute: ActivatedRoute) {}
    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(),
            price: new FormControl(),
            description: new FormControl()
        })

        // console.log(this.activeRoute.snapshot.params);
        const { id } = this.activeRoute.snapshot.params
        console.log(id);
        this.http.get(`http://localhost:3000/products/${id}`).subscribe(data => {
            this.form.patchValue(data);
        })
    }

    onSubmit() {
        const {id} = this.activeRoute.snapshot.params;
        this.http.put(`http://localhost:3000/products/${id}`, this.form.value).subscribe(data => {
            alert("Updated Product Successfully");
            this.router.navigate(["/admin/products"]);
        })
    }

}
