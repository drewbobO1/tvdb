import { Component, AfterViewInit, ElementRef, viewChild, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { FormsModule } from '@angular/forms';

// import { PrimeNGConfig } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TvDetailsComponent } from './tv-details/tv-details.component';

import { Application } from '@splinetool/runtime';

// const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
// const app = new Application(canvas);
// app.load('https://prod.spline.design/NyGC8F78inZsFujq/scene.splinecode');

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
export class AppComponent implements AfterViewInit {
  title = 'TvDbApp';

  @ViewChild('canvas3d', { static: true }) canvas3d!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const app = new Application(this.canvas3d.nativeElement);
    app.load('https://prod.spline.design/NyGC8F78inZsFujq/scene.splinecode');
  }
}

