import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpEvent,HttpHandler,HttpInterceptor,HttpRequest, HttpErrorResponse,} from '@angular/common/http';
// import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-matches',
  templateUrl: './add-matches.component.html',
  styleUrls: ['./add-matches.component.css']
})
export class AddMatchesComponent implements OnInit {
    Form: FormGroup;
    competitions:any;
    matches :any[]=[];

     runnerNameA:any;
     runnerNameB:any;
     marketId:any;
     eventId:any;
    
    datak:any;
  constructor(
     private fb: FormBuilder,
     public http: HttpClient,
     private router: Router, 
     ) { 
                this.Form = this.fb.group({
                 
                })
             }

  ngOnInit(): void {
    this.dataofallsports();
  }

  onOptionsSelected(e : any){
    // console.log("ee",e.target.value)
   this.http
                .get<any>('https://admin.bet99.io/admin/fetch/match?id='+e.target.value)

                .subscribe((ret: any)=> { 
                  console.log("ret data",ret)
                  const ww = ret.attachments.markets;
                  // console.log("raw", ww)

                for (var key of Object.keys(ww)) {
               
                 const res = JSON.stringify(ww[key]) ;
                  const re = JSON.parse(res);
                  if (re.marketType == "MATCH_ODDS"){
                   this.matches.push(re);
                  console.log("hurray", re)
                  
                }

                // if ()


                }


                })
                 
  }

  onoptionforrunner(e:any)
  {
    console.log("clicked");
    console.log(JSON.stringify(e.target.value));
    // const a=e.target.value;
    // this.marketId=a.marketId;
    // this.eventId=a.eventId;
    // console.log("marketId",this.marketId);
    // console.log("eventId",this.eventId);

  }


showMatchForm(){
  // showForm==false;
}
dataofallsports(){ 
          const obj=  {
            list:this.Form.value.list,
            // password:this.Form.value.password,

          }


 // console.log( "hdfjkhsdjk", data);
              // if(this.Form.value.username != null && this.Form.value.password != null){
                this.http
                .get<any>('http://localhost:3001/data')
                .subscribe((data: any) => {
                   // console.log("my_data",data);
                   // const llb = data[1].long_name;sx
                   // console.log("thias is",llb)
                   // console.log("heyyy")
                   this.competitions=data;
                   this.datak=data;
                   // console.log("mine",this.competition.competition_id)




                   // console.log(obj);
                   
                  // }
                });
              // }

}



}
