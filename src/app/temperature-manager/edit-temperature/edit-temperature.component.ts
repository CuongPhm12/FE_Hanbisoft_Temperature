import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TemperatureService} from '../../../service/temperature.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Temperature} from '../../model/Temperature';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-edit-temperature',
  templateUrl: './edit-temperature.component.html',
  styleUrls: ['./edit-temperature.component.scss']
})
export class EditTemperatureComponent implements OnInit {
    formGroup: FormGroup;
    temperature: Temperature;
    tempId;

  constructor(  private formBuilder: FormBuilder,
                private temperatureService: TemperatureService,
                private router: Router,
                private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
    tempId: [''],
    datetime: new FormControl('', [
      Validators.required]),
    status: new FormControl('', [Validators.required]),
    temperature: new FormControl('', [
        Validators.required,
      Validators.max(40),
      Validators.min(36)]),
  });
    this.tempId = this.route.snapshot.params['id'];
      this.temperatureService.detailsTemp(this.tempId).subscribe(data =>{
        this.temperature = data;
      }, error =>console.log(error));
  }

  validation_messages={
    datetime: [
      {type: 'required', message:'Please enter the date'},
    ],
    temperature: [
      {type: 'required', message: 'Please enter the temperature'},
      {type: 'min', message: 'the lowest temperature is 36'},
      {type: 'max', message: 'the highest temperature is 40'},
    ],
    status: [
      {type: 'required', message: 'Please enter the status'}]

}
  editTemp() {
    this.temperatureService.updateTemp(this.tempId,this.temperature).subscribe(data=>{
      this.router.navigateByUrl('/user-account').then(r=>alert("Update Successfully"))
    });
  }
}
