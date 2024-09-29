import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

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

import { ButtonModule } from 'primeng/button';
import { TvDetail } from '../../shared/tv-detail.model';


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
    FieldsetModule,
    ButtonModule
  ],
  templateUrl: './tv-detail-form.component.html',
  styleUrls: [
    './tv-detail-form.component.css'
  ],
})
export class TvDetailFormComponent {

  constructor (public service: TvDetailService) {}

  statusOptions: string[] = [
    "Continuing",
    "Ended",
    "Released",
    "Announced"
  ]

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true;

    if (form.valid) {
      if (this.service.formDataToPush.tvDetailId == 0) {
        this.insertRecord(form);
        this.service.resetForm(form);

      }
      else {
        console.log("Form id field value not 0");
        this.updateRecord(form);
      }
    }
    else {
      console.log("Please fill out all fields as required");
    }
  }

  insertRecord(form: NgForm) {
    this.service.postTvDetail()
      .subscribe({
        next:res=>{
          this.service.addedTvList = res as TvDetail[];
          this.service.resetForm(form);
          // this.toastr.success("Card data submitted!", "Payment Detail Register");
        },
        error: err => {console.error(err);}
      })
  }
  
  updateRecord(form: NgForm) {
    this.service.putTvDetail()
      .subscribe({
        next:res=>{
          this.service.addedTvList = res as TvDetail[];
          this.service.resetForm(form);
          // this.toastr.info("Card data updated!", "Payment Detail Register");
        },
        error: err => {console.error(err);}
      })
  }

}
