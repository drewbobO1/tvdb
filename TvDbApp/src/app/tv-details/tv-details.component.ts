import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvDetailFormComponent } from './tv-detail-form/tv-detail-form.component';
import { OrderListModule } from 'primeng/orderlist';
import { DataViewModule } from 'primeng/dataview';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { TvSearchDialogComponent } from '../tv-search-dialog/tv-search-dialog.component';

import { TvDetailService } from '../shared/tv-detail.service';

@Component({
  selector: 'app-tv-details',
  standalone: true,
  imports: [
    CommonModule,
    OrderListModule,
    DataViewModule,
    DialogModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    TvSearchDialogComponent,
    TvDetailFormComponent
  ],
  templateUrl: './tv-details.component.html',
  styleUrls: [
    './tv-details.component.css'
  ],
})
export class TvDetailsComponent {

  constructor(public service: TvDetailService) { }

  tvQueryList: any = [];
  dialogVisible: boolean = false;

  showDialog() {
    this.dialogVisible = true;
  }

  ngOnInit(): void { 
    this.service.refreshList;
  }
}
