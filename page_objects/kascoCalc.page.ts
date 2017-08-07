import { browser, $, $$, protractor, element, By } from 'protractor'
import { BasePage } from './base.page'

export class KascoCalc extends BasePage {
    public EC = protractor.ExpectedConditions
    public kascoCalc_URL = 'http://stag.parasol.ua/kasko'

    public brandMarka = $('#BrandMarka')
    public brandSearchResult = $$('li[ng-repeat="match in matches track by $index"]')
    public autoModel = $('#autoModel')

    public cityReg = $('[info="calculatorData.K1"]')
    public citySearchField = $('.e-contact-search-find')
    public citySearchList = $$('[ng-repeat="cityObj in cities track by cityObj.id"]')

    public autoCost = $('[info="calculatorData.Car.Cost"] .b-contact-data-item')
    public autoCostInputField = $('[ng-model="price"]')

    public driversNumb = $$('.b-list-drivers li')

    public autoAge = $('[info="calculatorData.Car.Age"]')
    public availableAges = $$('[info="calculatorData.Car.Age"] .ng-binding')

    public autoUser = $('[info="calculatorData.K11"]')
    public autoUserType = $$('.ng-scope')

    public insurancePeriod = $('[info="calculatorData.K3"]')
    public insuranceVar = $$('.ng-scope')

    public alarm = $('[info="calculatorData.K13"]')
    public alarmList = $('.b-list-checkboxes')
    public alarmNone = $('[for~="check0-"]')
    public alarmOn = $('[for~="check1-"]')
    public alarmGPS = $('[for~="check2-"]')
    public mulTLock = $('[for~="check3-"]')
    public lockOnWheel = $('[for~="check4-"]')

    public showPriceBtn = $('.b-show-price')

    async openKascoCalc() {
        await browser.get(this.kascoCalc_URL)
    }
    async selectAutoBrand(brand) {
        await browser.wait(this.EC.visibilityOf(this.brandMarka), 5000)
        await this.brandMarka.sendKeys(brand)
        await this.brandSearchResult.first().click()
    }
    async selectAutoModel(model) {
        await browser.wait(this.EC.visibilityOf(this.autoModel), 5000)
        await this.autoModel.sendKeys(model)
        await this.autoModel.submit()
    }
    async selectCityreg(city) {
        await browser.wait(this.EC.visibilityOf(this.cityReg), 5000)
        await this.cityReg.click()
        await browser.wait(this.EC.visibilityOf(this.citySearchField), 5000)
        await this.citySearchField.sendKeys(city)
        await this.citySearchList.first().click()

    }
    async selectAutoCost(price) {
        await browser.wait(this.EC.visibilityOf(this.autoCost), 5000)
        await this.autoCost.click()
        await browser.wait(this.EC.visibilityOf(this.autoCostInputField), 5000)
        await this.autoCostInputField.clear()
        await this.autoCostInputField.sendKeys(price)
        await this.autoCostInputField.submit()
    }
    async selectdriversNumb(number) {
        await browser.wait(this.EC.visibilityOf(this.driversNumb.first()), 5000)
        await this.driversNumb.get(number).click()
    }
    async selectAutoAge(age) {
        await browser.wait(this.EC.visibilityOf(this.autoAge), 5000)
        await this.autoAge.click()
        await browser.wait(this.EC.visibilityOf(this.autoAge.element(By.cssContainingText('.ng-scope', age))), 5000)
        await browser.wait(this.EC.elementToBeClickable(this.autoAge.element(By.cssContainingText('.ng-scope', age))), 5000)
        await this.autoAge.element(By.cssContainingText('.ng-scope', age)).click()
    }
    async selectAutoUser(user) {
        await browser.wait(this.EC.visibilityOf(this.autoUser), 5000)
        await this.autoUser.click()
        await browser.wait(this.EC.visibilityOf(this.autoUser.element(By.cssContainingText('.ng-scope', user))), 5000)
        await browser.wait(this.EC.elementToBeClickable(this.autoUser.element(By.cssContainingText('.ng-scope', user))), 5000)
        await this.autoUser.element(By.cssContainingText('.ng-scope', user)).click()
    }
    async selectInsurancePeriod(period) {
        await browser.wait(this.EC.visibilityOf(this.insurancePeriod), 5000)
        await this.insurancePeriod.click()
        await browser.wait(this.EC.visibilityOf(this.insurancePeriod.element(By.cssContainingText('.ng-scope', period))), 5000)
        await browser.wait(this.EC.elementToBeClickable(this.insurancePeriod.element(By.cssContainingText('.ng-scope', period))), 5000)
        await this.insurancePeriod.element(By.cssContainingText('.ng-scope', period)).click()
    }
    async selectAlarm(type) {
        /*await browser.wait(this.EC.visibilityOf(this.alarm), 5000)
        await this.alarm.click()
        await browser.wait(this.EC.visibilityOf(this.alarmList), 5000)
        await browser.wait(this.EC.elementToBeClickable(this.alarmGPS), 5000)
        await this.alarmGPS.click()*/

        await browser.wait(this.EC.visibilityOf(this.alarm), 5000)
        await this.alarm.click()
        await browser.wait(this.EC.visibilityOf(this.alarm.element(By.cssContainingText('.ng-scope', type))), 5000)
        await browser.wait(this.EC.elementToBeClickable(this.alarm.element(By.cssContainingText('.ng-scope', type))), 5000)
        await this.alarm.element(By.cssContainingText('.ng-scope', type)).$('.b-checkbox').click()
        await this.alarm.click()
    }
    async showPrice() {
        await browser.wait(this.EC.visibilityOf(this.showPriceBtn), 5000)
        await browser.wait(this.EC.elementToBeClickable(this.showPriceBtn), 5000)
        await this.showPriceBtn.click()
    }

}