export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        let increasingElems: Array<string> = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert']

        for (let i = 0; i < this.items.length; i++) {
            const isIncreasing: boolean = increasingElems.includes(this.items[i].name)
            if (this.items[0].name === "Sulfuras, Hand of Ragnaros") {
                continue
            }

            if (this.items[i].quality == 0) {
                this.items[i].sellIn -= 1
                continue
            }

            let qualityRate: number = 1;
            if (!isIncreasing) {
                qualityRate *= -1;
            }

            if (this.items[i].sellIn <= 0) {
                if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                    this.items[i].quality = 0;
                    qualityRate = 0;
                } else {
                    qualityRate *= 2
                }

            } else {
                if (this.items[i].name === "Backstage passes to a TAFKAL80ETC concert"){
                    if (this.items[i].sellIn <= 5) {
                        qualityRate *= 3;
                    } else if (this.items[i].sellIn <= 10) {
                        qualityRate *= 2;
                    }
                }
            }

            if (this.items[i].name === "Conjured"){
                qualityRate *= 2;
            }

            if (this.items[i].quality + qualityRate <= 50 && this.items[i].quality + qualityRate >= 0){
                this.items[i].quality += qualityRate;
            }

            this.items[i].sellIn -= 1

        }
        return this.items;
    }
}
let agedBrie = new Item('Aged Brie', 15, 20);
let sulfuras = new Item('Sulfuras, Hand of Ragnaros', 15, 20);
let backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20);
let conjured = new Item('Conjured', 15, 20);

let gildedRoseObj = new GildedRose([agedBrie, sulfuras, backstagePasses, conjured]);

for (let i = 0; i < 5; i++) {
    gildedRoseObj.updateQuality();
}
for (let i = 0; i < 4; i++){
    console.log(gildedRoseObj.items[i].name + " " + gildedRoseObj.items[i].sellIn + " " + gildedRoseObj.items[i].quality);
}

