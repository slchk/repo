const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require("chai");
const MainPage = require("./pageObject/mainPage");
const BaseElements = require("./helpers/baseElements");
const SearchComponent = require("./pageObject/pageComponents/searchComponent");
const BasePage = require("./pageObject/basePage");

const mainPage = new MainPage();
const baseElements = new BaseElements();
const searchComponent = new SearchComponent();
const chromiumUrl = "https://chromedriver.chromium.org/";

describe("chromedriver tests", () => {
  after(async () => {
    await BasePage.close();
  });

  it("tests", async () => {
    await BasePage.navigate(chromiumUrl);
    await baseElements.click(searchComponent.checkTitle);
    await baseElements.click(searchComponent.searchHeader);
    await baseElements.click(searchComponent.checkHighlight);
    await baseElements.click(searchComponent.checkNewTitle);
    await BasePage.navigate(chromiumUrl);
    await baseElements.click(searchComponent.searchButton);
    await baseElements.sendKeys(searchComponent.searchField, "driver");
    await baseElements.click(searchComponent.startSearch);
    await driver.wait(
      until.elementIsVisible(searchComponent.resultsOnThisSite),
      5000
    );
    const descriptions = await searchComponent.searchResultDescription;
    expect(await descriptions[0].getText()).to.contain("driver");
  });
});
