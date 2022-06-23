          import { Component, OnInit } from '@angular/core';
          import {FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
          import { HttpClient, HttpHeaders } from '@angular/common/http';
          import {HttpEvent,HttpHandler,HttpInterceptor,HttpRequest, HttpErrorResponse,} from '@angular/common/http';
          // import { RouterModule, Routes } from '@angular/router';
          import { Router } from '@angular/router';
          @Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          })
          export class LoginComponent implements OnInit {
            loginForm: FormGroup;

            constructor(
              private fb: FormBuilder,
              public http: HttpClient,
              private router: Router, 
            ) { 
              this.loginForm = this.fb.group({
                username: new FormControl(null, [Validators.required,]),
                password: new FormControl(null, [Validators.required,]),
              })
             }

            ngOnInit(): void {
            }

            ghfgd(){ 
              const obj=  {
                username:this.loginForm.value.username,
                password:this.loginForm.value.password,

              }
              console.log( "hdfjkhsdjk",obj);
              if(this.loginForm.value.username != null && this.loginForm.value.password != null){
                this.http
                .post<any>('http://localhost:3001/login',obj)
                .subscribe((data: any) => {
                  //console.log(data);
                  if (data.status == true) {
                   console.log("my_data",data);
                   console.log(obj);
                   
                  }
                });
              }
            }

          }
