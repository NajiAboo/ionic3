import { quote } from './../data/quote.interface';
export class QuotesService {
    private favoritesQuotes: quote[]=[];

    addFavoriteQuote(quote) {
        console.log(quote);
        this.favoritesQuotes.push(quote);
    }

    removeFavoriteQuote(quote: quote) {
        const id = this.favoritesQuotes.findIndex( (quoteEl) =>{
            return quoteEl.id== quote.id;
        })

        this.favoritesQuotes.splice(id, 1);
    }

    getFavorieQuotes() {
        return this.favoritesQuotes.slice();
    }

    isFavorite(quoteEl: quote) {
       return  this.favoritesQuotes.find((qts:quote)=>{
             return qts.id == quoteEl.id
        });
    }
}