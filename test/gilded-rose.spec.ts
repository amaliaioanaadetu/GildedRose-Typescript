import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

// Add a master test here
let agedBrie = new Item('Aged Brie', 10, 20);
let sulfuras = new Item('Sulfuras', 10, 20);
let backstagePasses = new Item('Backstage passes', 10, 20);
let conjured = new Item('Conjured', 10, 20);

let gildedRoseObj = new GildedRose([agedBrie, sulfuras, backstagePasses, conjured]);
for (let i = 0; i < 5; i++) {
    gildedRoseObj.updateQuality();
}
// describe('after 5 days, quality of aged brie is 25', () => {
//     expect(agedBrie.quality).to.equal(25);
// });


describe('Gilded Rose 1', function () {

    it('after 5 days, quality of aged brie is 25', function() {
        expect(agedBrie.quality).to.equal(25);
    });

});

describe('Gilded Rose 2', function () {

    it('after 5 days, quality of sulfuras is 15', function() {
        expect(sulfuras.quality).to.equal(15);
    });

});

describe('Gilded Rose 3', function () {

    it('after 5 days, quality of backstage passes is 15', function() {
        expect(backstagePasses.quality).to.equal(15);
    });

});

describe('Gilded Rose 3', function () {

    it('after 5 days, quality of conjured is 15', function() {
        expect(conjured.quality).to.equal(15);
    });

});


describe('Gilded Rose 5', function () {

    it('no quality goes beyond 50, except sulfuras', function() {
        let result:boolean = true;
        for (let i = 0; i < 4; i++){
            if (gildedRoseObj.items[i].quality > 50 && gildedRoseObj.items[i].name){
                result = false;
                break;
            }
        }
        expect(result).to.equal(true);
    });
});

