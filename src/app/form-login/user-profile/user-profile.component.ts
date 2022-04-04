import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {User} from '../../model/User';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
// @ts-ignore
  user: User = {}

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router,
              private tokenService:TokenService
  ) { }

  ngOnInit(): void {
    this.getCurrentUser()
  }
getCurrentUser(){
  // const userId = this.tokenService.getUserId();
  // this.userService.getUserById(userId).subscribe(data => {
  //   this.user = data;
  //   console.log("user: "+ JSON.stringify(this.user));
  // })

    this.authService.getCurrentUser().subscribe(data => {
      this.user = data
    })
}

  ngSubmit() {
    this.userService.updateUser(this.user).subscribe(data=>{
      console.log(data);
      this.user = data;
      alert("Update Successfully");
    })
  }
}
