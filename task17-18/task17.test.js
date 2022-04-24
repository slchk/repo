const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require("chai");

// const driver = new Builder().forBrowser("chrome").build();

describe(`chromedriver tests`, () => {
  let driver;

  beforeEach(async () => {
    driver = new Builder().forBrowser("chrome").build();
  });

  afterEach(async () => {
    await driver.close();
  });

  it("check title", async () => {
    await driver.get("https://chromedriver.chromium.org/home");
    const title = await driver.getTitle(By.xpath('//*[@class=" Rn3Z1b"]'));
    const searchHeader = await driver.findElement(
      By.xpath(
        '//li[@jsname="ibnC6b"]/div[@class="PsKE7e qV4dIc Qrrb5 YSH9J M9vuGd"]/div[@class="I35ICb"]/a'
      )
    );
    await searchHeader.click();
    const checkHighlight = await driver.findElement(
      By.xpath(
        '//li[@jsname="ibnC6b"]/div[@class="PsKE7e qV4dIc Qrrb5 YSH9J M9vuGd"]/div[@class="I35ICb"]/a[@aria-selected="true"]'
      )
    );
    const newTitle = await driver.getTitle(By.xpath('//*[@class=" Rn3Z1b"]'));

    await driver.get("https://chromedriver.chromium.org/");
    const searchButton = await driver.findElement(
      By.xpath('//div[@class="RBEWZc"]')
    );
    await searchButton.click();
    const searchField = await driver.findElement(
      By.xpath('//input[@class="whsOnd zHQkBf"]')
    );
    await driver.wait(until.elementIsVisible(searchField), 5000);
    await searchField.sendKeys("driver");
    const startSearchButton = await driver.findElement(
      By.css(".U26fgb.mUbCce.fKz7Od.i3PoXe.M9Bg4d .vu8Pwe")
    );
    await startSearchButton.click();
    await driver.sleep(2000);
    const searchResultDescription = await driver.findElements(
      By.css(".yDWqEe")
    );
    expect(await searchResultDescription[0].getText()).to.contain("driver");
  });
});

// it("check title", async () => {
//   await driver.get("https://chromedriver.chromium.org/");
//   const searchButton = await driver.findElement(
//     By.xpath('//div[@class="RBEWZc"]')
//   );
//   await searchButton.click();
//   const searchField = await driver.findElement(
//     By.xpath('//input[@class="whsOnd zHQkBf"]')
//   );
//   await driver.wait(until.elementIsVisible(searchField), 5000);
//   await searchField.sendKeys("driver");
//   const startSearchButton = await driver.findElement(
//     By.css(".U26fgb.mUbCce.fKz7Od.i3PoXe.M9Bg4d .vu8Pwe")
//   );
//   await startSearchButton.click();
//   await driver.sleep(2000);
//   const searchResultDescription = await driver.findElements(By.css(".yDWqEe"));
//   expect(await searchResultDescription[0].getText()).to.contain("driver");
// });
