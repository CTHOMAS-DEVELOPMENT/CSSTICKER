import store from "./store";
import { BASETICKERURL, CURRENCYLIST } from "./constants";
import { addCryptoValues } from "./actions";
import axios from "axios";

export const cryptoCurrencyData = (bitcoin, bitcoinName) => 
{
  
  const url=`${ BASETICKERURL }fsym=${ bitcoin }&tsyms=${ CURRENCYLIST }`;
  axios.get( url )
      .then(res => {
        const cryptos= res.data;
        cryptos[bitcoin]=bitcoinName;
        store.dispatch(addCryptoValues(cryptos));
      })
      .catch(function (error) {
        // handle error
        console.log("ERROR : ",error);
      });
    }
/////
//ADD
/////
////////
//UPDATE
////////
////////
//DELETE
////////
