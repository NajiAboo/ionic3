import { ResetButtonService } from './../../service/resetbutton.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  tapCriteria = 2;
  pressCriteria = 4;
  status:string;

  tappedCount = 0;
  pressedCount = 0;
   
  constructor(private resetbtnService: ResetButtonService) {
   
  }

  tapEvent(event) {
    this.tappedCount++;
    this.checkStatus();
  }

  pressEvent(event) {
    this.pressedCount++;
    this.checkStatus();
  }

  ngOnInit() {
    this.setStatus();

    //this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
    this.resetbtnService.reset().subscribe((btn)=>{
      this.resetBtn(btn);
    });
  }

    
  resetBtn(btn) {
 switch (btn) {
     case "all":
        this.pressedCount = 0;
        this.tappedCount = 0;
         break;
     case "tap":
     this.tappedCount = 0;
         break;
     case "press":
     this.pressedCount = 0;
         break;
     default:
         break;
 }
}

  setStatus(iswon = false) {

    if (iswon == true)
    {
      this.status ="You won";
    } else {
      this.status = this.tapCriteria + " taps and " + this.pressCriteria + " press";
    }
  }

  checkStatus() {
    if ( this.tapCriteria == this.tappedCount 
       && this.pressCriteria == this.pressedCount )
       {
         this.setStatus(true);
       }
  }
}
