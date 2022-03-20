class ChristmasGift {
  constructor() {
    this.sweets = [];
  }

  addSweet(sweets) {
    this.sweets.push(sweets);
  }

  getCommonWeight() {
    return this.sweets.map((obj) => obj.weight).reduce((a, b) => a + b);
  }

  sortweight() {
    return this.sweets.sort((a, b) => b.weight - a.weight);
  }

  filterChocolate() {
    return this.sweets.filter((name) => {
      if (name.isChocolate == "chocolate" && name.brand == "roshen") {
        return name;
      }
    });
  }
}

class Sweets {
  constructor(brand, color, weight) {
    this.brand = brand;
    this.color = color;
    this.weight = weight;
  }

  init() {
    return new Sweets(this.brand, this.shape, this.weight);
  }
}

class Candies extends Sweets {
  constructor(brand, color, weight, isChocolate) {
    super(brand, color, weight);
    this.isChocolate = isChocolate;
  }
}

class Lollipops extends Sweets {
  constructor(brand, color, weight, withGum) {
    super(brand, color, weight);
    this.withGum = withGum;
  }
}

const christmasgift = new ChristmasGift();
christmasgift.addSweet(new Candies("komunarka", "brown", 15, "marmalade"));
christmasgift.addSweet(new Candies("spartak", "white", 23, "marmalade"));
christmasgift.addSweet(new Candies("roshen", "yellow", 12, "chocolate"));
christmasgift.addSweet(new Candies("nestle", "brown", 18, "chocolate"));

christmasgift.addSweet(new Lollipops("roshen", "blue", 25, "withoutGum"));
christmasgift.addSweet(new Lollipops("chupachups", "red", 20, "withGum"));
console.log(christmasgift.getCommonWeight("weight"));
// console.log(christmasgift);
console.log(christmasgift.sortweight());

console.log(christmasgift.filterChocolate());
