import { Coin } from "../api/types/Coin";
import { CoinSimple } from "../api/types/CoinSimple";

export const getSeeMoreList = (coinsList: Coin[]): CoinSimple[] => {

    const newList = coinsList.map((coin: Coin) => {
       const simpleCoin = {
           name: coin.name,
           symbol: coin.symbol,
           id: coin.id
       } as CoinSimple

       return simpleCoin;
    })

    return newList;

}