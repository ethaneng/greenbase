import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.sass'
})
export class MenuItemComponent {
  @Input() label = ''
  @Input() icon: IconDefinition = faStar
  @Input() badgeText?: string
}
