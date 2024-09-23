import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

// import { PrimeNGConfig } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    FloatLabelModule
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
