import { Component } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { faHome, faList, faTag, faFolder, faUserGroup, faChartSimple, faMessage, faQuestionCircle, faAward, faUser, faCog} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent {
  icons = {
    faHome,
    faList,faTag, faFolder, faUserGroup, faChartSimple, faMessage, faQuestionCircle, faAward, faUser, faCog
  }
}
