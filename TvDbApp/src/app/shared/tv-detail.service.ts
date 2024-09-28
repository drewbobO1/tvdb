import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable, BehaviorSubject } from 'rxjs';
import { TvDetail } from './tv-detail.model';

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


  getUrlForSqlDb = this.sqlDbApiUrl+"/TvDetail";

  refreshList() {
    console.log("Refresh list working");
    this.http.get(this.getUrlForSqlDb)
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
    const newData: TvDetail = {
      tvDetailId: 0,
      title: result.title,
      network: result.network,
      status: result.status,
      summary: result.summary,
      firstDayAired: result.firstDayAired,
      artworkUrl: result.artworkUrl
    }

    this.tvDataInstance.next(newData);
  }
}
