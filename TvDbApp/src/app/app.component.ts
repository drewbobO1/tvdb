import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

// import { PrimeNGConfig } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvDetailFormComponent } from './tv-details/tv-detail-form/tv-detail-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    FloatLabelModule,
    TvDetailFormComponent,
    TvDetailsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
})
export class AppComponent {
  title = 'TvDbApp';
  value: string = "";
}
