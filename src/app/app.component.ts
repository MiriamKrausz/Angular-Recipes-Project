import { Component, SimpleChanges } from '@angular/core';
import { RouterModule,RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from "./components/footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        CommonModule,
        RouterOutlet,
        TopBarComponent,
        RouterModule,
        FooterComponent
    ]
})
export class AppComponent {
  title = 'Recipes';
  
  // // הפוקנציה הראשונה שעולה מיד בהעלת הקומפוננטה לאויר
  // ngOnInit(): void {
  //   window.scrollTo(0, 0);

  // }

// אחרי שהשתנה אלמנטים (לךדוגמא ששלחנו אינפוט לקומפוננטת ילד והיא השתנתה שם)
  ngOnChanges(changes: SimpleChanges): void {

  }

  // אחרי שכל הדום עלה כבר
  ngAfterViewInit(): void {
  }
}









