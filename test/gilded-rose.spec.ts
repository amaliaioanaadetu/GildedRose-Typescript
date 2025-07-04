import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

// Add a master test here
// let agedBrie = new Item('Aged Brie', 15, 20);
// let sulfuras = new Item('Sulfuras', 15, 20);
// let backstagePasses = new Item('Backstage passes', 15, 20);
// let conjured = new Item('Conjured', 15, 20);
//
// let gildedRoseObj = new GildedRose([agedBrie, sulfuras, backstagePasses, conjured]);
// for (let i = 0; i < 5; i++) {
//     gildedRoseObj.updateQuality();
// }
// describe('after 5 days, quality of aged brie is 25', () => {
//     expect(agedBrie.quality).to.equal(25);
// });


describe('Aged Brie', function () {

    it('after 5 days, quality of aged brie is 25', function() {
        const agedBrie = new Item('Aged Brie', 15, 20)
        const agedBrieObj = new GildedRose([agedBrie])
        for (let i = 0; i < 5; i++){
            agedBrieObj.updateQuality()
        }
        expect(agedBrie.quality).to.equal(25);
    });

});

describe('Sulfuras', function () {

    it('after 5 days, quality of sulfuras is 15', function() {
        const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 15, 20)
        const sulfurasObj = new GildedRose([sulfuras])
        for (let i = 0; i < 5; i++){
            sulfurasObj.updateQuality()
        }
        expect(sulfuras.quality).to.equal(20);
    });

});

describe('Backstage passes', function () {

    it('after 5 days, quality of backstage passes is 15', function() {
        const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)
        const backstageObj = new GildedRose([backstagePasses])
        for (let i = 0; i < 5; i++){
            backstageObj.updateQuality()
        }

        expect(backstagePasses.quality).to.equal(25);
    });

});

describe('Conjured', function () {

    it('after 5 days, quality of conjured is 15', function() {
        const conjured = new Item('Conjured', 15, 20)
        const conjuredObj = new GildedRose([conjured])
        for (let i = 0; i < 5; i++){
            conjuredObj.updateQuality()
        }
        expect(conjured.quality).to.equal(15);
    });

});

describe('backstage passes <10 days', function () {

    it('backstage passes increase by 3 when there are less than 10 days', function() {
        // const item = new Item('Backstage passes', 10, 20);
        const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 9, 20)
        const backstageObj = new GildedRose([backstagePasses])
        let qualityNow:number = backstagePasses.quality;
        backstageObj.updateQuality();
        let qualityTomorrow: number = backstagePasses.quality;


        expect(qualityTomorrow - qualityNow).to.equal(2);
    });

});

describe('Sulfura SellIn', function () {

    it('sulfura sellin never changes', function() {
        // const item = new Item('Backstage passes', 10, 20);
        const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 9, 20)
        const sulfurasObj = new GildedRose([sulfuras])
        let sellinNow:number = sulfuras.sellIn;
        sulfurasObj.updateQuality();
        let sellinTomorrow: number = sulfuras.sellIn;


        expect(sellinNow).to.equal(sellinTomorrow);
    });

});


describe('Negative Quality', function () {

    it('never negative quality', function() {
        // const item = new Item('Backstage passes', 10, 20);
        const cheese = new Item('Cheese', 5, 0)
        const cheeseObj = new GildedRose([cheese])
        let sellinNow:number = cheese.sellIn;
        cheeseObj.updateQuality();

        expect(cheese.quality).to.equal(0);
    });

});


describe('SellIn passed for concert', function () {

    it('backstage passes have quality 0 if sellIn passes', function() {
        // const item = new Item('Backstage passes', 10, 20);
        const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)
        const backstageObj = new GildedRose([backstagePasses])
        backstageObj.updateQuality();
        // let qualityTomorrow: number = backstagePasses.quality;


        expect(backstagePasses.quality).to.equal(0);
    });

});

describe('Negative SellIn', function () {

    it('Quality keeps decreasing when sellin is negative', function() {
        // const item = new Item('Backstage passes', 10, 20);
        const cheese = new Item('Cheese', -2, 20)
        const cheeseObj = new GildedRose([cheese])
        let qualityNow:number = cheese.quality;
        cheeseObj.updateQuality();

        expect(cheese.quality < qualityNow).to.equal(true);
    });

});

describe('Quality Aged Brie', function () {

    it('Quality increasing twice for aged brie when sellIn negative', function() {
        // const item = new Item('Backstage passes', 10, 20);
        const agedBrie = new Item('Aged Brie', -5, 20)
        const agedbrieObj = new GildedRose([agedBrie])
        let qualityYesterday:number = agedBrie.quality;
        agedbrieObj.updateQuality();

        expect(agedBrie.quality - qualityYesterday).to.equal(2);
    });

});


describe('Conjured for Negative SellIn', function () {

    it('Conjured for negative sellIn', function() {
        // const item = new Item('Backstage passes', 10, 20);
        const conjured = new Item('Conjured', -5, 20)
        const conjuredObj = new GildedRose([conjured])
        let qualityYesterday:number = conjured.quality;
        conjuredObj.updateQuality();

        expect(conjured.quality - qualityYesterday).to.equal(-4);
    });

});

describe('Bckstage passes over 50', function () {

    it('Bckstage passes with quality over 50 after sellIn', function() {
        // const item = new Item('Backstage passes', 10, 20);
        const bckstage = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 60)
        const backstageObj = new GildedRose([bckstage])
        let qualityYesterday:number = bckstage.quality;
        backstageObj.updateQuality();

        expect(bckstage.quality).to.equal(0);
    });

});



