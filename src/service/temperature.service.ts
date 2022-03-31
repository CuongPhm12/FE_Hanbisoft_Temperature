import { Injectable } from '@angular/core';
import {environment} from '../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Temperature} from '../app/model/Temperature';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
API_TEMP = environment.API_LOCAL_USER + 'temp-list';
API_DELETE_TEMP = environment.API_LOCAL_USER + 'delete-temp';
API_EDIT_TEMP = environment.API_LOCAL_USER + 'edit-temp';
API_DETAIL_TEMP = environment.API_LOCAL_USER + 'find-temp';
API_CREATE_TEMP = environment.API_LOCAL_USER + 'create-temp';
API_SEARCH_TEMP = environment.API_LOCAL_USER + 'search-temp?fdate=';

  constructor(private http: HttpClient) { }

  listTempt():Observable<Temperature[]>{
    return this.http.get<Temperature[]>(this.API_TEMP)
}
  createTemp(temperature: Temperature): Observable<Temperature>{
    return this.http.post<Temperature>(this.API_CREATE_TEMP, temperature);
  }
  deleteTempById(id: number): Observable<Temperature>{
    return this.http.delete<Temperature>(this.API_DELETE_TEMP + '/' + id);
  }

  updateTemp(id: number, temperature: Temperature): Observable<Temperature>{
    return this.http.put<Temperature>(this.API_EDIT_TEMP + '/' + id, temperature);
  }

  detailsTemp(id: string): Observable<Temperature>{
    return this.http.get<Temperature>(this.API_DETAIL_TEMP + '/' + id);
  }
  searchTemp(fdate:Date,tdate:Date,name:string):Observable<Temperature>{
    return this.http.get<Temperature>(this.API_SEARCH_TEMP+ fdate+ '&tdate=' + tdate + '&name=' + name);
  }

}
