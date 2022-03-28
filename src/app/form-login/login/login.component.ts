import { Component, OnInit } from '@angular/core';
import {SignInForm} from '../../model/SignInForm';
import {Router} from '@angular/router';
import {AuthService} from '../../../service/auth.service';
import {TokenService} from '../../../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  roles2: any = ['ADMIN'];
  roles1: any = ['USER'];

  form: any = {};
  signInForm: SignInForm;
  checkRegister=false;
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router){ }

  ngOnInit(): void {
    if(this.authService.getData()) {
      this.checkRegister =true;
    }
  }
  ngSubmit(){
    this.signInForm = new SignInForm(
        this.form.username,
        this.form.password
    )
    this.authService.signIn(this.signInForm).subscribe(data =>{
      if(data.token!=undefined){
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setRole(data.roles);
        this.router.navigate(['user-account']).then(()=>
            window.location.reload())
      }
    })
  }

}

