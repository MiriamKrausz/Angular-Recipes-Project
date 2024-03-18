import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatInputModule,],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) { }

  logout() {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: 'black',
      cancelButtonColor: 'yellow',
      confirmButtonText: 'Yes, logout!',
      cancelButtonText: 'No, stay logged in'
    }).then((result) => {
      if (result.isConfirmed) {
        // מתבצעת התניידות מה-Session Storage
        sessionStorage.clear();
        // אם המשתמש אישר התנתקות, מועבר לדף הבית
        this.router.navigate(['/home']);
      } else {
        // אם המשתמש ביטל, מוחזר לדף הקודם
        window.history.back();
      }
    });
  }
}
