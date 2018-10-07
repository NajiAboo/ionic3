import { quote } from './../../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes.service';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  favButtonStatus:string;
  categoryGroup: {category:string, quotes: quote[], icon: string};

   constructor(private navParam: NavParams, 
               private alertCtrl: AlertController,
               private quoteService: QuotesService) {
   }

   ngOnInit() {
    this.categoryGroup = this.navParam.data;
    this.favButtonStatus = 'Favorite';
   }

   onAddToFav(quote) {

    let confirm = this.alertCtrl.create({
      title: "Add Quote",
      message: "Do you want to add to favorites?",
      buttons: [{
        text: "Agree",
        handler: () =>{
          this.quoteService.addFavoriteQuote(quote);
        }
      },
    {
      text: "Disagree",
      role: 'cancel',
      handler: () =>{
        console.log("DisAgreed");
      }
    }]

    });

    confirm.present();
   }

   onRemoveFromFav(quote) {
     this.quoteService.removeFavoriteQuote(quote);
   }

   isFavorite(quoteEl) {
     return this.quoteService.isFavorite(quoteEl);
   }
}
