import { Component } from '@angular/core';

import { TvDetailService } from '../../../shared/tv-detail.service';
import { TvDetail } from '../../../shared/tv-detail.model';
import { TvDetailsComponent } from '../../tv-details.component';
import { environment } from '../../../../environments/environment.development';

import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';





@Component({
  selector: 'app-tv-search-dialog',
  standalone: true,
  imports: [
    TvDetailsComponent,
    CommonModule,
    DataViewModule
  ],
  templateUrl: './tv-search-dialog.component.html',
  styles: ``
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
