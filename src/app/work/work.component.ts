import { Component } from '@angular/core';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { IxTypography } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  imports: [Angular2ImageGalleryModule, IxTypography],
})
export class WorkComponent {}
