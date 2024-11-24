import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
    form: any;
    constructor(private http: HttpClient, private router: Router){}
    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl('',[Validators.required, Validators.minLength(6)]),
            price: new FormControl(0,[Validators.required, Validators.min(0)]),
            description: new FormControl('')
        })
    }

    onSubmit() {
        console.log(this.form.value);
        this.http.post("http://localhost:3000/products", this.form.value).subscribe((data) => {
            alert("Created new product successfully");
            this.router.navigate(["/admin/products"]);
        })
    }
}
