import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService } from '../../../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  public userExists = false;

  public timerInterval: any;
  public timer: any;

  public loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private _loginService: LoginService) { }

  ngOnInit(): void { }

  submit() {
    if (this.loginForm.valid) {
      const name = this.loginForm.get('userName')?.value;
      const password = this.loginForm.get('password')?.value;

      this._loginService.getAllusers().subscribe(
        (users: any[]) => {
          this.userExists = users.some(user => user.name === name);
          if (this.userExists) {
            const user = users.find(user => user.name === name && user.password === password);
            if (user) {
              // Save user details to sessionStorage
              sessionStorage.setItem('userId', user.code);
              sessionStorage.setItem('userName', user.name);
              console.log(user.name);
              Swal.fire({
                icon: 'success',
                title: 'User Exists!',
                text: 'User was found in the system.'
              });
              this.router.navigate(['/recipe']);

            } else {
              Swal.fire({
                icon: 'error',
                title: 'Password is not correct!',
                text: `No user with password ${password}.`
              });
            }
          } else {
            Swal.fire({
              title: "Redirected to registration page",
              html: "You are being redirected to the registration page in <b></b> milliseconds.",
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading(null);
                this.timer = Swal.getPopup()?.querySelector("b");
                const timerInterval = setInterval(() => {
                  this.timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
                Swal.getPopup()?.addEventListener('mouseenter', () => clearInterval(timerInterval));
                Swal.getPopup()?.addEventListener('mouseleave', () => this.timerInterval = setInterval(() => {
                  this.timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100));
              },
              willClose: () => {
                clearInterval(this.timerInterval);
              }
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
                this.router.navigate(['/user/register'], { queryParams: { userName: name } });
              }
            });
          }
        },
        (err) => {
          console.log('Error occurred while fetching users', err);
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'An error occurred while fetching users.'
          });
        }
      );
    } else {
      Swal.fire("The form is invalid!");
    }
  }
}
