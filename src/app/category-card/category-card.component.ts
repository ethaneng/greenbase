import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.sass'
})
export class CategoryCardComponent {
  @Input() title?: string
  @Input() description?: string
  @Input({required: true}) imgSrc: string = ''
  faEdit = faEdit
}
