import {Component, Input, OnInit, Output} from '@angular/core';
import {TemperatureService} from '../../../service/temperature.service';
import {Router} from '@angular/router';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-temperature',
  templateUrl: './delete-temperature.component.html',
  styleUrls: ['./delete-temperature.component.scss']
})
export class DeleteTemperatureComponent implements OnInit {
  @Input()
  deleteId: number;
  @Input()
  deleteName: string;

  @Output()
  deleteComplete = new EventEmitter<boolean>();
  constructor(
      public temperatureService: TemperatureService,
      public router: Router,
  ) { }

  ngOnInit(): void {
  }

  deleteTemp() {
    this.temperatureService.deleteTempById(this.deleteId).subscribe(data => {
      document.getElementById('closeModal').click();
      this.deleteComplete.emit(true);
    });
    alert("Delete successfully!")
  }
}
