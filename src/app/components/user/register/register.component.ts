import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { User } from '../../../models/user.model';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../../login.service';
import Swal from 'sweetalert2';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',

})
export class RegisterComponent implements OnInit {
  name: string | null = null;
  isPasswordValid: boolean = false;
  isAtLeast8Chars: boolean = false;
  hasUppercase: boolean = false;
  hasLowercase: boolean = false;
  hasSpecialChar: boolean = false;
  hasNumber: boolean = false;
  value!: string;
  hide = true;
  public userExists = false
  public newUser!: User;
  passwordField: any;



  public registerForm: FormGroup = new FormGroup({
    "userName": new FormControl('', [Validators.required]),
    "address": new FormControl('', [Validators.required]),
    "email": new FormControl('', [Validators.required, Validators.email]),
    "password": new FormControl('', [Validators.required]),
  });

  
  constructor(
    private route: ActivatedRoute, private router: Router, private _loginService: LoginService) { }
  ngOnInit(): void {
    // Subscribe to changes in query parameters
    this.route.queryParams.subscribe(params => {
      this.name = params['userName'] || null; // Update 'name' value when it changes
      this.registerForm.patchValue({ userName: this.name }); // Update form control value
    });
  }

  checkPasswordConditions() {
    const password = this.registerForm.controls['password'].value;
    this.isAtLeast8Chars = password.length >= 8;
    this.hasUppercase = /[A-Z]/.test(password);
    this.hasLowercase = /[a-z]/.test(password);
    this.hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    this.hasNumber = /\d/.test(password);
  }




  matcher = new MyErrorStateMatcher();
  register() {
    console.log("Submitting form...");
    console.log(this.registerForm.valid ? "true" : "false");
    if (this.registerForm.valid) {
      const userName = this.registerForm.get('userName')?.value;
      const address = this.registerForm.get('address')?.value;
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      console.log(userName, address, email, password);
      this._loginService.getAllusers().subscribe(
        (users: any[]) => {
          this.userExists = users.some(user => user.email === email);
          console.log(this.userExists ? "true" : "false")
          if (this.userExists) {
            Swal.fire('User already exists! Please try again');
            confirmButtonColor: 'yellow';
            this.registerForm.reset({ userName: userName });
          } else {
            this.newUser = new User(userName, address, email, password);
            console.log(this.newUser)
            this._loginService.addUser(this.newUser).subscribe({
              next: (res) => {
                Swal.fire({
                  icon: 'success',
                  title: 'You have successfully registered!',
                })
                console.log(res)
              },
              error: (err) => {
                console.log(err);

              }
            })
            this.router.navigate(['recipe'])
          }
        }
      );
    } else {
      Swal.fire("The form is invalid!");
    }
  }


}
