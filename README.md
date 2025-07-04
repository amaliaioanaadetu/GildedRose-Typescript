C1: Once the sell by date has passed, Quality degrades twice as fast

C2: The Quality of an item is never negative

C3: "Aged Brie" actually increases in Quality the older it gets

C4: The Quality of an item is never more than 50

C5: "Sulfuras", being a legendary item, never has to be sold or decreases in Quality

C6: "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days o less but Quality drops to 0 after the concert

//We have recently signed a supplier of conjured items. This requires an update to our system:

//C7: "Conjured" items degrade in Quality twice as fast as normal items


- orice alt element care nu e inclus, degradeaza cu 1

pt Sulfuras:
- +0 mereu
- sellIn -0 mereu


pt aged brie:
- - sellIn > 0 -> +1
- - sellIn < 0 -> +2


pt backstage passes:
-- sellIn <= 10: +2
-- sellIn <= 5: +3
-- sellIn < 0: qual = 0

pt conjured:
- sellIn > 0: -2
- sellIn < 0: -4

in rest:
- sellIn > 0: -1
- sellIn < 0: -2