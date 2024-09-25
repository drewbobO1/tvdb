import { Component } from '@angular/core';

import { TvDetailService } from '../shared/tv-detail.service';
import { TvDetail } from '../shared/tv-detail.model';
import { environment } from '../../environments/environment.development';

import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-tv-search-dialog',
  standalone: true,
  providers: [TvDetail],
  imports: [
    CommonModule,
    DataViewModule,
    InputGroupModule,
    InputGroupAddonModule,
    CardModule
  ],
  templateUrl: './tv-search-dialog.component.html',
  styleUrls: [
    './tv-search-dialog.component.css'
  ]
})
export class TvSearchDialogComponent {
  constructor(public service: TvDetailService, public tvDetail: TvDetail) {

  }

  tvQueryList: any = [];
  queryResultData: TvDetail = new TvDetail();

  onSearch(showTitle: string) {
    this.service.searchShowList(showTitle, environment.tvDbWebApiAuthKey)
    .subscribe({
      next: res => {
        console.log("Show found: ", res.data);
        for (let result of res.data) {
          let newEntry: TvDetail = new TvDetail();
          newEntry.title = result.name;
          newEntry.network = result.network;
          newEntry.summary = result.overview;
          newEntry.firstDayAired = result.first_air_time;
          newEntry.artworkUrl = result.image_url;
          
          this.tvQueryList.push(newEntry);
        }
      },
      error: err => {
        console.error("Show not found: ", err);
      }
    })
  }

}