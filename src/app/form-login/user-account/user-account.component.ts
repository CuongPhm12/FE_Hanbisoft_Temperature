import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  datetime: any;
  temps: any;

  constructor() { }

  ngOnInit(): void {
  }

    getSearch() {
        
    }
}
