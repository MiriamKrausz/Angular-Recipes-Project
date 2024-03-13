import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';
import {MatIconModule} from '@angular/material/icon'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  userName: string | null = '';

  constructor(private globalService: GlobalService,private router: Router) { }

  ngOnInit(): void {
    if (typeof sessionStorage !== 'undefined') {
      // קריאה מ-Session Storage והצבת הערך במשתנה
      this.userName = sessionStorage.getItem('userName');
      if (!this.userName) {
        this.userName = 'User';
      }
    }
  }
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