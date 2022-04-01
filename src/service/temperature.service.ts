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
API_FIND_ALL_TEMP_BY_USER = environment.API_LOCAL_USER + 'search-user-temp';
API_FIND_ALL_TEMP_BY_USER_FR_DATE_TO_DATE = environment.API_LOCAL_USER + 'search-user-temp?fdate=';
API_SEARCH_TEMP = environment.API_LOCAL_USER + 'search-temp?fdate=';
API_SEARCH_TEMP_BY_USER = environment.API_LOCAL_USER + 'search-temp-by-user?fdate=';
API_PAGE_TEMP = environment.API_LOCAL_USER + 'temperature-not-pagination';
API_PAGE_TEMP_GET_ALL = environment.API_LOCAL_USER + 'temps?index=';

  constructor(private http: HttpClient) { }

  listTempt():Observable<Temperature[]>{
    return this.http.get<Temperature[]>(this.API_TEMP)
}
listTempByUser():Observable<Temperature[]>{
    return this.http.get<Temperature[]>(this.API_FIND_ALL_TEMP_BY_USER);
}
listTempByUserFrDateToDate(fdate:Date,tdate:Date):Observable<Temperature[]>{
    return this.http.get<Temperature[]>(this.API_FIND_ALL_TEMP_BY_USER_FR_DATE_TO_DATE + fdate+ '&tdate=' + tdate);
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
  searchTempByUser(fdate:Date,tdate:Date):Observable<Temperature>{
    return this.http.get<Temperature>(this.API_SEARCH_TEMP_BY_USER + fdate+ '&tdate=' + tdate);
  }


  getAllTempNotPagination(): Observable<Temperature[]> {
    return this.http.get<Temperature[]>(this.API_PAGE_TEMP )
  }
  getAllTemp(index: number): Observable<Temperature[]> {
    return this.http.get<Temperature[]>(this.API_PAGE_TEMP_GET_ALL+ index)
  }

}
