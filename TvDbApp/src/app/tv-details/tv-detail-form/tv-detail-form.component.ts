import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';

import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';

import { TvDetailService } from '../../shared/tv-detail.service';
import { environment } from '../../../environments/environment.development';

import { TvDetailsComponent } from '../tv-details.component';


@Component({
  selector: 'app-tv-detail-form',
  standalone: true,
  imports: [
    FormsModule,
    CardModule,
    FloatLabelModule,
    InputNumberModule,
    InputGroupModule,
    InputGroupAddonModule,
    CalendarModule,
    InputTextModule,
  ],
  templateUrl: './tv-detail-form.component.html',
  styleUrls: [
    './tv-detail-form.component.css'
  ],
})
export class TvDetailFormComponent {
  constructor (public service: TvDetailService, public tvDetail: TvDetailsComponent) {

  }

  title: string = "";
  episodeQty: number = 0;
  episodeLength: number = 0;
  startDate: string = "";
  endDate: string = "";

  onSearch(showTitle: string) {
    this.service.searchShowList(showTitle, environment.tvDbWebApiAuthKey)
    .subscribe({
      next: res => {
        // console.log("Show found: ", res.data);
        this.tvDetail.tvQueryList = res.data;
      },
      error: err => {
        console.error("Show not found: ", err);
      }
    })
  }
}
