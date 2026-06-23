import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuItem,
  IxContent,
} from '@siemens/ix-angular/standalone';
import { SocialComponent } from './social/social.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SocialComponent,
    IxApplication,
    IxApplicationHeader,
    IxMenu,
    IxMenuItem,
    IxContent,
  ],
})
export class AppComponent {
  title = 'lukasmaurer.art';
}
