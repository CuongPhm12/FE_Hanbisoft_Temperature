import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../service/token.service';
import {TemperatureService} from '../../../service/temperature.service';
import {Temperature} from '../../model/Temperature';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  // datetime: any;
  // temps: any;
    deleteId: number;
    deleteName: string;
  listByUSer;
    fdate: any;
    tdate: any;
    formListTemp: FormGroup;
    public tempId ='';
    public name='';


  constructor( private temperatureService: TemperatureService) {

  }
    validation_messages = {
        fdate:[
            {type: 'required', message: 'Please input the date'}
        ],
        tdate:[
            {type: 'required', message: 'Please input the date'}
        ]
    }


  ngOnInit(): void {
      this.temperatureService.listTempByUser().subscribe((data:Temperature[])=>{
          this.listByUSer = data;
          console.log(data);
      });
      this.formListTemp = new FormGroup({
          fdate : new FormControl('',[Validators.required]),
          tdate : new FormControl('',[Validators.required])
      });
    // this.listTempByUSer()
  }
listTempByUSer(){
    this.temperatureService.listTempByUser().subscribe(data => {
      this.listByUSer = data
    })
}
    getSearch() {
        this.temperatureService.searchTempByUser(this.fdate,this.tdate).subscribe(data => {
            // console.log('searchData'+data);
            if (data === null) {
                this.listByUSer = [];
                alert("No record match!")
            } else {
                this.listByUSer = data;
            }
        });
    }
    deleteSuccess() {
        this.ngOnInit();
    }
}
