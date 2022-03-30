import { Component, OnInit } from '@angular/core';
import {Temperature} from '../../model/Temperature';
import {TemperatureService} from '../../../service/temperature.service';
import {MatDialog} from '@angular/material/dialog';
import {User} from '../../model/User';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list-temperature',
  templateUrl: './list-temperature.component.html',
  styleUrls: ['./list-temperature.component.scss']
})
export class ListTemperatureComponent implements OnInit {
  totalElements: any = 0;
  temps: Temperature[] = [];
  user: User;
  // loading: boolean;
    searchTemp: FormGroup;;
  constructor(private temperatureService: TemperatureService){ }

  ngOnInit(): void {
    this.temperatureService.listTempt().subscribe((data:Temperature[])=>{
      this.temps = data;
      console.log(this.temps);
    });
     this.searchTemp = new FormGroup({
       name : new FormControl(''),
       position : new FormControl(''),
       status : new FormControl('')
     });
  }

  // search() {
  //   this.temperatureService.search(this.searchTemp.value.name, this.searchTemp.value.position, this.searchTemp.value.symptom).subscribe((data: Temperature[]) => {
  //     return this.temps = data
  //   });
  // }


  // private getListRequest(request) {
  //   this.loading = true;
  //   this.temperatureService.pageSong(request).subscribe(data => {
  //     console.log('data --> ', data);
  //     this.temps = data.content;
  //     console.log('data[content] ---->', data.content);
  //     this.totalElements = data.totalElements;
  //     console.log('data[totalElements] == ', data.totalElements);
  //     this.loading = false;
  //   }, error => {
  //     this.loading = false;
  //   });
  // }

  // nextPage(event: PageEvent) {
  //   console.log('event -->', event);
  //   const request = {};
  //   // @ts-ignore
  //   request.page = event.pageIndex.toString();
  //   // @ts-ignore
  //   request.size = event.pageSize.toString();
  //   // @ts-ignore
  //   console.log('request[size]', request.size);
  //   this.getListRequest(request);
  // }
  // deleteSong(id: number){
  //   this.songService.deleteSongById(id).subscribe(() => {
  //     this.getListRequest({page: 0, size: 3});
  //     window.location.reload();
  //   });
  // }
  // openDialog(id: number) {
  //   const dialogRef = this.dialog.open(DialogComponent);
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result){
  //       this.deleteSong(id);
  //     }
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

}
