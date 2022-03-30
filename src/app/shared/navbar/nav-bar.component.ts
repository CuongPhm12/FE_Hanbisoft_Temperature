import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';
import {ThemePickerModule} from '../theme-picker';
import {ThemeStorage} from '../theme-picker/theme-storage/theme-storage';
import {StyleManager} from '../style-manager';
import {HttpClientModule} from '@angular/common/http';
// import {TokenService} from '../../service/token.service';
import {MatIconModule} from '@angular/material/icon';
// import {DialogComponent} from '../../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {TokenService} from '../../../service/token.service';
// import {ApiService} from '../../service/api.service';
// import {Temperature} from '../../model/Temperature';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  // temps : Temperature[] = [];
  name: string;
  checkLogin = false;
  checkLogout = false;
  constructor(private tokenService: TokenService,
           ){
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.checkLogin = true;
      this.name = this.tokenService.getName()
    }
    if(this.tokenService.getToken()){
      this.checkLogout = true;
      // this.name = this.tokenService.getName()
    }
    // this.tempService.listTemp().subscribe(data =>{
    //   this.temps = data;
    // });
  }
  // openDialog() {
  //   this.dialog.open(DialogComponent, {
  //     width: '30%'
  //   });
  // }
  logOut(){
    this.tokenService.logOut()
  }

}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    ThemePickerModule,
    MatIconModule,
  ],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
  providers: [StyleManager, ThemeStorage]
})
export class NavBarModule {}

