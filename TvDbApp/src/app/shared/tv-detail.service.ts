import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable, BehaviorSubject } from 'rxjs';
import { TvDetail } from './tv-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TvDetailService {

  constructor(private http: HttpClient) { }

  webApiUrl: string = environment.tvDbWebApiBaseUrl
  sqlDbApiUrl: string = environment.sqlDbApiUrl;

  tvDataInService: TvDetail = {
    tvDetailId: 0,
    title: "",
    network: "",
    status: "",
    summary: "",
    firstDayAired: "",
    artworkUrl: ""
  };

  private tvDataInstance = new BehaviorSubject<TvDetail>(this.tvDataInService);
  currentTvData = this.tvDataInstance.asObservable();

  addedTvList: TvDetail[] = [];

  formDataToPush: TvDetail = new TvDetail();
  formSubmitted: boolean = false;

  getAndPutUrlForSqlDb = this.sqlDbApiUrl+"/TvDetail";
  

  refreshList() {
    console.log("Refresh list working");
    this.http.get(this.getAndPutUrlForSqlDb)
    .subscribe({
      next: res => {
        console.log("Res: ", res);
        this.addedTvList = res as TvDetail[];
      },
      error: err => {
        console.error("There was an error: ", err);
        return null;
      }
    })
  }

  searchShowList(showTitle: string, authToken: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${authToken}`,
      "accept": "application/json",
    });

    return this.http.get(`${this.webApiUrl}/search?query=${encodeURIComponent(showTitle)}`, { headers });
  }

  populateServiceWithQueryResult(result: TvDetail) {
    // const newData: TvDetail = {
    //   tvDetailId: 0,
    //   title: result.title,
    //   network: result.network,
    //   status: result.status,
    //   summary: result.summary,
    //   firstDayAired: result.firstDayAired,
    //   artworkUrl: result.artworkUrl
    // }

    // this.tvDataInstance.next(newData);
    this.formDataToPush.tvDetailId = result.tvDetailId;
    this.formDataToPush.title = result.title;
    this.formDataToPush.network = result.network;
    this.formDataToPush.status = result.status;
    this.formDataToPush.summary = result.summary;
    this.formDataToPush.firstDayAired = result.firstDayAired;
    this.formDataToPush.artworkUrl = result.artworkUrl;
  }

  // ==================================
  //       LOCAL DB API FUNCTIONS
  // ==================================

  postTvDetail() {
    return this.http.post(this.getAndPutUrlForSqlDb, this.formDataToPush)
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.formDataToPush = new TvDetail();
    this.formSubmitted = false;
  }
}
