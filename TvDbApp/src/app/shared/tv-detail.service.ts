import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvDetailService {

  webApiUrl: string = environment.tvDbWebApiBaseUrl

  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.webApiUrl)
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
}
