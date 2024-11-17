import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
    form: any;
    constructor(private http: HttpClient){}
    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(),
            price: new FormControl(),
            description: new FormControl()
        })
    }

    onSubmit() {
        console.log(this.form.value);
        this.http.post("http://localhost:3000/products", this.form.value).subscribe((data) => {
            alert("Created new product successfully");
        })
    }
}
