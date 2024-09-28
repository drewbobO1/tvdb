import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvDetailFormComponent } from './tv-detail-form/tv-detail-form.component';
import { OrderListModule } from 'primeng/orderlist';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { TvSearchDialogComponent } from '../tv-search-dialog/tv-search-dialog.component';

import { TvDetailService } from '../shared/tv-detail.service';
import { TvDetail } from '../shared/tv-detail.model';

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
    TvDetailFormComponent,
    CardModule
  ],
  templateUrl: './tv-details.component.html',
  styleUrls: [
    './tv-details.component.css'
  ],
})
export class TvDetailsComponent {

  constructor(public service: TvDetailService) { }

  userTvList: any[] = [];
  dialogVisible: boolean = false;

  showDialog() {
    this.dialogVisible = true;
  }

  ngOnInit(): void { 
    console.log("This is what the addedTvList in the details component returns: ", this.service.addedTvList);
    
  }
}
