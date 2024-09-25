import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvDetailFormComponent } from './tv-detail-form/tv-detail-form.component';
import { OrderListModule } from 'primeng/orderlist';
import { DataViewModule } from 'primeng/dataview';
import { TvDetail } from '../shared/tv-detail.model';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';


@Component({
  selector: 'app-tv-details',
  standalone: true,
  imports: [
    TvDetailFormComponent,
    CommonModule,
    OrderListModule,
    DataViewModule,
    DialogModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule
  ],
  templateUrl: './tv-details.component.html',
  styleUrls: [
    './tv-details.component.css'
  ],
})
export class TvDetailsComponent {

  tvQueryList: any = [];
  dialogVisible: boolean = false;

  showDialog() {
    this.dialogVisible = true;
  }
}
