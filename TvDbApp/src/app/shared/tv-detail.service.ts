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
    title: "",
    network: "",
    status: "",
    summary: "",
    firstDayAired: "",
    artworkUrl: ""
  };

  private tvDataInstance = new BehaviorSubject<TvDetail>(this.tvDataInService);
  currentTvData = this.tvDataInstance.asObservable();

  getUrlForSqlDb = this.sqlDbApiUrl+"/TvDetail";

  refreshList() {
    this.http.get(this.getUrlForSqlDb)
    .subscribe({
      next: res => {
        console.log("Res: ", res);
      },
      error: err => {
        console.error("There was an error: ", err);
      }
    })
  }

  searchShowList(showTitle: string, authToken: string): Observable<any> {
    // this.http.get(this.webApiUrl+"/search?query="+showTitle)
    // .subscribe({
    //   next: res => {
    //     console.log("Show found: ", res);
    //   },
    //   error: err => {
    //     console.error("Show not found: ", err);
    //   }
    // })
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${authToken}`,
      "accept": "application/json",
    });

    return this.http.get(`${this.webApiUrl}/search?query=${encodeURIComponent(showTitle)}`, { headers });
  }

  // Can I do this in the service class?? Is that what it's for?
  populateServiceWithQueryResult(result: TvDetail) {
    const newData: TvDetail = {
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
