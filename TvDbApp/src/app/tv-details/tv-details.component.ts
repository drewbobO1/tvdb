import { Component } from '@angular/core';
import { TvDetailFormComponent } from './tv-detail-form/tv-detail-form.component';


@Component({
  selector: 'app-tv-details',
  standalone: true,
  imports: [
    TvDetailFormComponent
  ],
  templateUrl: './tv-details.component.html',
  styleUrls: [
    './tv-details.component.css'
  ],
})
export class TvDetailsComponent {

}
