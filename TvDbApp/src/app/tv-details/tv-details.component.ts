import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvDetailFormComponent } from './tv-detail-form/tv-detail-form.component';
import { OrderListModule } from 'primeng/orderlist';
import { DataViewModule } from 'primeng/dataview';
import { TvDetail } from '../shared/tv-detail.model';


@Component({
  selector: 'app-tv-details',
  standalone: true,
  imports: [
    TvDetailFormComponent,
    CommonModule,
    OrderListModule,
    DataViewModule
  ],
  templateUrl: './tv-details.component.html',
  styleUrls: [
    './tv-details.component.css'
  ],
})
export class TvDetailsComponent {

  tvQueryList: any = [];
}
