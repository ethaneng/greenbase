import { Component } from '@angular/core';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryCardComponent, FontAwesomeModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.sass'
})
export class CategoriesComponent {
  icons = {
    faPlus
  }
}
