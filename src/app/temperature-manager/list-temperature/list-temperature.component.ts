import { Component, OnInit } from '@angular/core';
import {Temperature} from '../../model/Temperature';
import {TemperatureService} from '../../../service/temperature.service';
import {MatDialog} from '@angular/material/dialog';
import {User} from '../../model/User';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-temperature',
  templateUrl: './list-temperature.component.html',
  styleUrls: ['./list-temperature.component.scss']
})
export class ListTemperatureComponent implements OnInit {
  temps;
  user: User;
  searchTemp: FormGroup;
  fdate: any;
  tdate: any;
  name: '';
  totalPagination: number;
  indexPagination: number=1;
  listTempNotPagination: Temperature[] = [];
  formListTemp: FormGroup;
  constructor(private temperatureService: TemperatureService){ }


validation_messages = {
  fdate:[
    {type: 'required', message: 'Please input the date'}
  ],
  tdate:[
    {type: 'required', message: 'Please input the date'}
  ]
}

  ngOnInit(): void {
    this.formListTemp = new FormGroup({
      fdate : new FormControl('',[Validators.required]),
      tdate : new FormControl('',[Validators.required])
    });
    this.name='';
    this.temperatureService.getAllTemp(0).subscribe((data:Temperature[])=>{
      this.temps = data;
      console.log(this.temps);
    });

    this.temperatureService.getAllTempNotPagination().subscribe((data: Temperature[]) => {

      this.listTempNotPagination = data;

      if ((this.listTempNotPagination.length % 5) != 0) {
        this.totalPagination = (Math.round(this.listTempNotPagination.length / 5)) + 1;
      }
    })

  }
  getSearch() {
    this.temperatureService.searchTemp(this.fdate,this.tdate, this.name).subscribe(data => {
      console.log('searchData'+data);
      if (data === null) {
        this.temps = [];
        alert("No record match!")
      } else {
        this.temps = data;
      }
    });
  }

  indexPaginationChage(value: number) {
    this.indexPagination = value;
  }

  findPaginnation() {
    this.temperatureService.getAllTemp((this.indexPagination * 5) - 5).subscribe((data: Temperature[]) => {
      this.temps= data;
    })
  }

  firtPage() {
    this.indexPagination = 1;
    this.ngOnInit();
  }

  prviousPage() {
    this.indexPagination = this.indexPagination - 1;
    if (this.indexPagination == 0) {
      this.indexPagination = 1;
      this.ngOnInit();
    } else {
      this.temperatureService.getAllTemp((this.indexPagination * 5) - 5).subscribe((data: Temperature[]) => {
        this.temps = data;
      })
    }
  }

  nextPage() {
    this.indexPagination = this.indexPagination + 1;
    if (this.indexPagination > this.totalPagination) {
      this.indexPagination = this.indexPagination - 1;
    }
    this.temperatureService.getAllTemp((this.indexPagination * 5) - 5).subscribe((data: Temperature[]) => {
      this.temps = data;
    })
  }

  lastPage() {
    this.indexPagination = this.listTempNotPagination.length / 5;
    this.temperatureService.getAllTemp((this.indexPagination * 5) - 5).subscribe((data: Temperature[]) => {
      this.temps = data;
    })
  }
}
