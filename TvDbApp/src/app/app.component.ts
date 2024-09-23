import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';

// import { PrimeNGConfig } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TvDetailsComponent } from './tv-details/tv-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // FormsModule,
    FloatLabelModule,
    TvDetailsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
})
export class AppComponent {
  title = 'TvDbApp';
}
