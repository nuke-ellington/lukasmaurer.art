import { Component } from '@angular/core';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  imports: [Angular2ImageGalleryModule],
})
export class WorkComponent {}
