import { SettingsPage } from './../settings/settings';
import { QuotePage } from './../quote/quote';
import { QuotesService } from './../../services/quotes.service';
import { quote } from './../../data/quote.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SettingService } from '../../services/settings.service';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit {

  favoriteQuotes: quote[];

  constructor(public navCtrl: NavController
            , public navParams: NavParams
            , public quotesService: QuotesService
            , public model: ModalController
            , public settingService: SettingService) {
  }

   ngOnInit() {
     console.log('on init');
     this.favoriteQuotes = this.quotesService.getFavorieQuotes();
     console.log(this.favoriteQuotes);
   }

   ionViewWillEnter(){
    console.log('did enter ');
    this.favoriteQuotes = this.quotesService.getFavorieQuotes();
     console.log(this.favoriteQuotes);
   }

   onQuoteVisit(favQuote) {
     console.log("clicketd lite");
    let modal = this.model.create(QuotePage,favQuote);
    modal.present();
    modal.onDidDismiss((remove)=>{
      if(remove) {
        this.onRemoveFromFavoriteQuote(favQuote);
      }
    });
   }

  onRemoveFromFavoriteQuote(quote) {
    this.quotesService.removeFavoriteQuote(quote);
    this.favoriteQuotes = this.quotesService.getFavorieQuotes();
  }

  backGroundColor() {
    return this.settingService.backGroundAltStatus()? 'altQuoteBackground':'quotebackground';
  }
}
