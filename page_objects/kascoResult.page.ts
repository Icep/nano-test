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
    public rating_1 = element.all(By.xpath('//*[contains(@class,"info-part")][1]//*[contains(@class,"result-rating")]/span[@class="active"]'))
    public rating_2 = element.all(By.xpath('//*[contains(@class,"info-part")][2]//*[contains(@class,"result-rating")]/span[@class="active"]'))
    public rating_3 = element.all(By.xpath('//*[contains(@class,"info-part")][3]//*[contains(@class,"result-rating")]/span[@class="active"]'))
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
                await console.log(unSorted)
                return await unSorted;
            });
        }).then(async function (unSorted) {
            var sorted = unSorted.slice()
            sorted = sorted.sort()
            expect(await sorted).toEqual(unSorted, "Sorting is Failed" + ele)
        });
    }
    async sortCompareDESC(ele) {
        var sorted = [], unSorted = []
        await ele.map(async function (eachName) {
            return await eachName.getText().then(async function (unSorted) {
                await console.log(unSorted)
                return await unSorted;
            });
        }).then(async function (unSorted) {
            var sorted = unSorted.slice()
            sorted = sorted.sort()
            sorted = sorted.reverse()
            expect(await sorted).toEqual(unSorted, "Sorting is Failed" + ele)
        });
    }
    async getRating(elem) {
        return await elem.count()
    }
    async sortRatingCompare() {
        var sorted = [], unSorted = []
        unSorted.push((this.rating_1).count(), (this.rating_2).count(), (this.rating_3).count())

        var sorted = unSorted.slice()
        sorted = sorted.sort()
        expect(await sorted).toEqual(unSorted, "Sorting by rating is Failed")

    }

}