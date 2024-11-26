import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
    form: any;
    constructor(private http: HttpClient, private router: Router, ){}
    ngOnInit() {
        this.form = new FormGroup({
            username: new FormControl(),
            email: new FormControl(),
            password: new FormControl()
        })
    }

    onSubmit() {
        this.http.post("http://localhost:3000/register", this.form.value).subscribe((data) => {
            alert("Đăng kí thành công");
            this.router.navigate(['/signin'])
        })
    }
}
