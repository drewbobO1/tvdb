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
import { TagModule } from 'primeng/tag';

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
    CardModule,
    TagModule
  ],
  templateUrl: './tv-details.component.html',
  styleUrls: [
    '../../styles.css',
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
    this.service.refreshList();
  }

  populateForm(selectedRecord: TvDetail) {
    this.service.formDataToPush = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm("Are you sure you want to delete this show?")) {
      this.service.deleteTvDetail(id)
      .subscribe({
        next:res=>{
          this.service.addedTvList = res as TvDetail[];
          // this.toastr.error("Show data deleted!", "Payment Detail Register");
        },
        error: err => {console.error(err);}
      })
    }
  }
}
