import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FloatLabelModule } from 'primeng/floatlabel';
import { TvDetailsComponent } from './tv-details/tv-details.component';

import { Application } from '@splinetool/runtime';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
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

