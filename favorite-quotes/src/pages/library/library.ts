import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import quotes from '../../data/quotes';
import { QuotesPage } from './../quotes/quotes';
import { quote } from './../../data/quote.interface';

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quotesPage = QuotesPage;
  quotesCollection: {category:string, quotes: quote[], icon: string}[];
   
  ngOnInit() {
    this.quotesCollection = quotes;
  }
}
