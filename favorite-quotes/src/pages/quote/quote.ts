import { quote } from './../../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit {

  favQuote:quote;

  constructor(public navCtrl: NavController, 
             public navParams: NavParams,
             public viewCtrl: ViewController) {
  }

  ngOnInit() {
    console.log('modal init');
    console.log(this.navParams.data);
    this.favQuote = this.navParams.data;
  }
  
  onDismiss(remove = false) {
    console.log("dismiss fired");
    this.viewCtrl.dismiss(remove);
  }
}
