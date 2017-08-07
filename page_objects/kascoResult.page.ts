import { browser, $, $$, protractor, element, By } from 'protractor'
import { BasePage } from './base.page'

export class KascoResult extends BasePage {
    public EC = protractor.ExpectedConditions

    public arrowPriceASC = $$('.m-arrow-up').first()
    public arrowPriceDESC = $$('.m-arrow-down').first()
    public arrowRating = $('.m-arrow-check')
    public franchiseASC = $$('.m-arrow-up').last()
    public franchiseDESC = $$('.m-arrow-down').last()
    public infoCard = $$('.info-part')
    public companyName = $$('.result-title')
    public price = $$('.result-price')
    public resultRating = $$('.result-rating')
    public activeRatingStars = $$('.result-rating .active')
    public franchise = $$('[id~="single-button-sum-"]')

    async sortPriceASC() {
        await browser.wait(this.EC.visibilityOf(this.arrowPriceASC), 5000)
        await this.arrowPriceASC.click()
    }
    async sortPriceDESC() {
        await browser.wait(this.EC.visibilityOf(this.arrowPriceDESC), 5000)
        await this.arrowPriceDESC.click()
    }
    async sortRating() {
        await browser.wait(this.EC.visibilityOf(this.arrowRating), 5000)
        await this.arrowRating.click()
    }
    async sortFranchiseASC() {
        await browser.wait(this.EC.visibilityOf(this.franchiseASC), 5000)
        await this.franchiseASC.click()
    }
    async sortFranchiseDESC() {
        await browser.wait(this.EC.visibilityOf(this.franchiseDESC), 5000)
        await this.franchiseDESC.click()
    }
    async sortCompareASC(ele) {
        var sorted = [], unSorted = []
        await ele.map(async function (eachName) {
            return await eachName.getText().then(async function (unSorted) {
                return await unSorted;
            });
        }).then(async function (unSorted) {
            var sorted = unSorted.slice()
            sorted = sorted.sort()
            expect(await sorted).toEqual(unSorted)
        });
    }
    async sortCompareDESC(ele) {
        var sorted = [], unSorted = []
        await ele.map(async function (eachName) {
            return await eachName.getText().then(async function (unSorted) {
                return await unSorted;
            });
        }).then(async function (unSorted) {
            var sorted = unSorted.slice()
            sorted = sorted.sort()
            sorted = sorted.reverse()
            expect(await sorted).toEqual(unSorted)
        });
    }
    async getRating_1(){
        await  console.log(this.activeRatingStars.count())
        return await this.activeRatingStars.count()
    }

}
