import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';

import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';

import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { TvDetailService } from '../../shared/tv-detail.service';


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
    DropdownModule,
    FieldsetModule
  ],
  templateUrl: './tv-detail-form.component.html',
  styleUrls: [
    './tv-detail-form.component.css'
  ],
})
export class TvDetailFormComponent implements OnInit {

  constructor (public service: TvDetailService) {}

  title: string = "";
  network: string = "";
  status: string = "";
  summary: string = "";
  firstDayAired: string = "";
  artworkUrl: string = "https://apps.uwm.edu/docs/wp-content/uploads/dafoe-USE-THIS-ONLY-NEW-AS-OF-APR-15-HEADSHOT-DAFOE_WILLEM2_OK-Narrative-041922-scaled.jpeg";

  statusOptions = [
    "Continuing",
    "Ended",
    "Released",
    "Announced"
  ]

  ngOnInit(): void {
    this.service.currentTvData.subscribe(data => {
      console.log("This should be data from the observable! ", data);

      this.title = data?.title || "";
      this.network = data?.network || "";
      this.status = data?.status || "";
      this.summary = data?.summary || "";
      this.firstDayAired = data?.firstDayAired || "";
      this.artworkUrl = data?.artworkUrl || this.artworkUrl;
    })
  }

}
