import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login_form';
  verifyname(){
   
    let n: string = document.getElementById("name")!.innerHTML;
  
   if(n.length < 5){
     document.getElementById("name")!.style.color ="red";
   }
   else{
    document.getElementById("name")!.style.color ="black";

   }

  }
  verifyemail(){
    alert("emai");

  }
  verifypassword(){
    alert("password");

  }
  submitbutton(){
    alert("submit");

  }

}
