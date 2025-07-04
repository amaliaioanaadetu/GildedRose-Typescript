import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

// Add a master test here
let agedBrie = new Item('Aged Brie', 10, 20);
let sulfuras = new Item('Sulfuras', 10, 20);
let backstagePasses = new Item('Backstage passes', 10, 20);
let conjured = new Item('Conjured', 10, 20);

let gildedRoseObj = new GildedRose([agedBrie, sulfuras, backstagePasses, conjured]);
// for (let i = 0; i < 5; i++) {
//     gildedRoseObj.updateQuality();
// }
// // describe('after 5 days, quality of aged brie is 25', () => {
// //     expect(agedBrie.quality).to.equal(25);
// // });
//
//
// describe('Gilded Rose', function () {
//
//     it('after 5 days, quality of aged brie is 25', function() {
//         expect(agedBrie.quality).to.equal(25);
//     });
//
// });
//
//
// describe('Gilded Rose', function () {
//
//     it('no quality goes beyond 50, except sulfuras', function() {
//         let result:boolean = true;
//         for (let i = 0; i < 4; i++){
//             if (gildedRoseObj.items[i].quality > 50 && gildedRoseObj.items[i].name){
//                 result = false;
//                 break;
//             }
//         }
//         expect(result).to.equal(true);
//     });
//
// });
