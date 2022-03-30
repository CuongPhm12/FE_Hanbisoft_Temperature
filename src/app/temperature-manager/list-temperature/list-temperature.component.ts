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
  // totalElements: any = 0;
  temps;
  user: User;
  // loading: boolean;
    searchTemp: FormGroup;
  datetime: any;
  name: '';
  // defaultValue :""
  constructor(private temperatureService: TemperatureService){ }

  ngOnInit(): void {
    this.name='';
    this.temperatureService.listTempt().subscribe((data:Temperature[])=>{
      this.temps = data;
      console.log(this.temps);
    });
     // this.searchTemp = new FormGroup({
     //   name : new FormControl(''),
     //   position : new FormControl(''),
     //   status : new FormControl('')
     // });
  }
  getSearch() {
    this.temperatureService.searchTemp(this.datetime, this.name).subscribe(data => {
      console.log('searchData'+data);
      if (data === null) {
        alert("No record match!")
      } else {
        this.temps = data;
      }
    });
  }
}
