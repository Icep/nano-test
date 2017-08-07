import { browser, ExpectedConditions as EC, $, $$ } from 'protractor'
import { KascoCalc } from '../page_objects/kascoCalc.page'
import { KascoResult } from '../page_objects/kascoresult.page'

declare let expect: any

describe('Casco calculator test -', function () {
    let kascoCalc = new KascoCalc()
    let kascoResult = new KascoResult()

    const test_1 = { company: 'УНИКА', price: '1,719 грн' }
    const test_2 = { company: 'УПСК', price: '1,780 грн' }
    const test_3 = { company: 'КНЯЖА', price: '1,941 грн' }

    beforeEach(async () => {
        await kascoCalc.openKascoCalc()
        await browser.driver.manage().window().maximize()
    })

    it('Names and prices check -', async function () {
        await kascoCalc.selectAutoBrand('Audi')
        await kascoCalc.selectAutoModel('A3')
        await kascoCalc.selectCityreg('Хмельницкий')
        await kascoCalc.selectAutoCost('50000')
        await kascoCalc.selectAutoAge('2012')
        await kascoCalc.selectdriversNumb('0')
        await kascoCalc.selectAutoUser('Физическое лицо')
        await kascoCalc.selectInsurancePeriod('6 месяцев')
        await kascoCalc.selectAlarm('GPS')

        await kascoCalc.showPrice()
        await browser.wait(EC.visibilityOf(kascoResult.infoCard.first()), 5000)

        expect(await kascoResult.companyName.get(0).getText()).toContain(test_1.company)
        expect(await kascoResult.price.get(0).getText()).toContain(test_1.price)
        expect(await kascoResult.companyName.get(1).getText()).toContain(test_2.company)
        expect(await kascoResult.price.get(1).getText()).toContain(test_2.price)
        expect(await kascoResult.companyName.get(2).getText()).toContain(test_3.company)
        expect(await kascoResult.price.get(2).getText()).toContain(test_3.price)
    })
    it('Sort by price check', async function () {
        await kascoCalc.selectAutoBrand('Audi')
        await kascoCalc.selectAutoModel('A3')
        await kascoCalc.selectCityreg('Хмельницкий')
        await kascoCalc.selectAutoCost('50000')
        await kascoCalc.selectAutoAge('2012')
        await kascoCalc.selectdriversNumb('0')
        await kascoCalc.selectAutoUser('Физическое лицо')
        await kascoCalc.selectInsurancePeriod('6 месяцев')
        await kascoCalc.selectAlarm('GPS')

        await kascoCalc.showPrice()
        await browser.wait(EC.visibilityOf(kascoResult.infoCard.first()), 5000)

        await kascoResult.sortPriceASC()
        await kascoResult.sortCompareASC(kascoResult.price)
        await kascoResult.sortPriceDESC()
        await kascoResult.sortCompareDESC(kascoResult.price)
    })
    it('Sort by Franchise check', async function () {
        await kascoCalc.selectAutoBrand('Audi')
        await kascoCalc.selectAutoModel('A3')
        await kascoCalc.selectCityreg('Хмельницкий')
        await kascoCalc.selectAutoCost('50000')
        await kascoCalc.selectAutoAge('2012')
        await kascoCalc.selectdriversNumb('0')
        await kascoCalc.selectAutoUser('Физическое лицо')
        await kascoCalc.selectInsurancePeriod('6 месяцев')
        await kascoCalc.selectAlarm('GPS')

        await kascoCalc.showPrice()
        await browser.wait(EC.visibilityOf(kascoResult.infoCard.first()), 5000)


        await kascoResult.sortFranchiseASC()
        await kascoResult.sortCompareASC(kascoResult.franchise)
        await kascoResult.sortFranchiseDESC()
        await kascoResult.sortCompareDESC(kascoResult.franchise)
    })
    xit('Sort by Rating check', async function () {
        await kascoCalc.selectAutoBrand('Audi')
        await kascoCalc.selectAutoModel('A3')
        await kascoCalc.selectCityreg('Хмельницкий')
        await kascoCalc.selectAutoCost('50000')
        await kascoCalc.selectAutoAge('2012')
        await kascoCalc.selectdriversNumb('0')
        await kascoCalc.selectAutoUser('Физическое лицо')
        await kascoCalc.selectInsurancePeriod('6 месяцев')
        await kascoCalc.selectAlarm('GPS')

        await kascoCalc.showPrice()
        await browser.wait(EC.visibilityOf(kascoResult.infoCard.first()), 5000)

       
        await console.log(kascoResult.activeRatingStars.count())
        expect(await (kascoResult.activeRatingStars).count()).toEqual(10)
       /* await kascoResult.getRating(0)
        await kascoResult.getRating(1)
        await kascoResult.getRating(2)*/
      
    })
    afterAll(() => {

    })
})