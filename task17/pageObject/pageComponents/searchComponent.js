const { Builder, By, until } = require("selenium-webdriver");
const BasePage = require("../basePage");

class SearchComponent extends BasePage {
  get checkTitle() {
    return driver.findElement(By.xpath('//*[@class=" Rn3Z1b"]'));
  }

  get searchHeader() {
    return driver.findElement(
      By.xpath(
        '//li[@jsname="ibnC6b"]/div[@class="PsKE7e qV4dIc Qrrb5 YSH9J M9vuGd"]/div[@class="I35ICb"]/a'
      )
    );
  }

  get checkHighlight() {
    return driver.findElement(
      By.xpath(
        '//li[@jsname="ibnC6b"]/div[@class="PsKE7e qV4dIc Qrrb5 YSH9J M9vuGd"]/div[@class="I35ICb"]/a[@aria-selected="true"]'
      )
    );
  }

  get checkNewTitle() {
    return driver.findElement(By.xpath('//*[@class=" Rn3Z1b"]'));
  }
  get searchButton() {
    return driver.findElement(By.xpath('//div[@class="RBEWZc"]'));
  }

  get searchField() {
    return driver.findElement(By.xpath('//input[@class="whsOnd zHQkBf"]'));
  }

  get startSearch() {
    return driver.findElement(
      By.css(".U26fgb.mUbCce.fKz7Od.i3PoXe.M9Bg4d .vu8Pwe")
    );
  }

  get resultsOnThisSite() {
    return driver.findElement(
      By.css(".U26fgb.mUbCce.fKz7Od.i3PoXe.M9Bg4d .vu8Pwe")
    );
  }

  get searchResultDescription() {
    return driver.findElements(By.css(".yDWqEe"));
  }
}

module.exports = SearchComponent;
