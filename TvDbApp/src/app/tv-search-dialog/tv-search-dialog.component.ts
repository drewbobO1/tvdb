import { Component } from '@angular/core';

import { TvDetailService } from '../shared/tv-detail.service';
import { TvDetail } from '../shared/tv-detail.model';
import { environment } from '../../environments/environment.development';

import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { CardModule } from 'primeng/card';

import { TvDetailFormComponent } from '../tv-details/tv-detail-form/tv-detail-form.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'app-tv-search-dialog',
  standalone: true,
  providers: [TvDetail],
  imports: [
    CommonModule,
    DataViewModule,
    InputGroupModule,
    InputGroupAddonModule,
    CardModule,
    TvDetailFormComponent,
    FloatLabelModule,
    TagModule
  ],
  templateUrl: './tv-search-dialog.component.html',
  styleUrls: [
    './tv-search-dialog.component.css'
  ]
})
export class TvSearchDialogComponent {
  constructor(public service: TvDetailService, public tvDetail: TvDetail) {

  }

  tvQueryList: TvDetail[] = [];
  queryResultData: TvDetail = new TvDetail();

  handleSearch(showTitle: string) {
    this.service.searchShowList(showTitle, environment.tvDbWebApiAuthKey)
    .subscribe({
      next: res => {
        console.log("Show found: ", res.data);
        if (this.tvQueryList.length != 0) this.tvQueryList = [];
        for (let result of res.data) {
          let newEntry: TvDetail = new TvDetail();
          newEntry.title = result.name;
          newEntry.network = result.network;
          newEntry.status = result.status;
          newEntry.summary = result.overview;
          newEntry.firstDayAired = this.reformatDate(result.first_air_time);
          newEntry.artworkUrl = result.image_url;
          
          this.tvQueryList.push(newEntry);
        }
      },
      error: err => {
        console.error("Show not found: ", err);
      }
    })
  }

  reformatDate(date: string) {
    const year = date.slice(0,4);
    const month = date.slice(5,7);
    const day = date.slice(8);

    const reformattedDate = `${month}/${day}/${year}`; 

    return reformattedDate;
  }

  handleResultClick(result: TvDetail) {
    console.log("This should be the object I clicked! ", result);
    this.reformatDate(result.firstDayAired);
    this.service.populateServiceWithQueryResult(result);
  }

}