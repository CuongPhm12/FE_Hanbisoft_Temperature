import { Component, OnInit } from '@angular/core';
import {TemperatureService} from '../../../service/temperature.service';
import {Temperature} from '../../model/Temperature';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-temperature',
  templateUrl: './create-temperature.component.html',
  styleUrls: ['./create-temperature.component.scss']
})
export class CreateTemperatureComponent implements OnInit {
  // form: any={};
  // status: "Please fill in the form to create temperature";
  temperature: Temperature;

  formCreateTemp: FormGroup;

  constructor(private temperatureService: TemperatureService,
              private router: Router) {
  }
  validation_messages = {
    datetime:[
      {type: 'required', message: 'Please input the date'},
    ],
    temperature:[
      {type: 'required', message: 'Please input the temperature'},
      {type: 'min', message: 'Please input the temperature greater 36'},
      {type: 'max', message: 'Please input the temperature less 38'},
    ]
  }

  ngOnInit(): void {
    this.formCreateTemp = new FormGroup({
      datetime : new FormControl('',[Validators.required]),
      temperature : new FormControl('',[Validators.required, Validators.min(36), Validators.max(38)]),
      status: new FormControl('')
    })
  }

  ngSubmit() {
    // this.temperature = new Temperature(
    //     this.form.
    // )

  }

  save() {
    this.temperatureService.createTemp(this.formCreateTemp.value).subscribe(()=>{
      this.router.navigateByUrl('/list-temp').then(r=>alert("Create Successfully!"));
    })
}
}
