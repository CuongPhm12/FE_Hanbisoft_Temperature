import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {User} from '../../model/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
// @ts-ignore
  user: User = {}

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getCurrentUser()
  }
getCurrentUser(){
    this.authService.getCurrentUser().subscribe(data => {
      this.user = data
    })
}

  ngSubmit() {
    return false;
  }
}
