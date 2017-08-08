import { browser, ExpectedConditions as EC, $, $$ } from 'protractor'
import { KascoCalc } from '../page_objects/kascoCalc.page'
import { KascoResult } from '../page_objects/kascoresult.page'

//declare let expect: any

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

        expect(await kascoResult.companyName.get(0).getText()).toContain(test_1.company, "Company not in the list")
        expect(await kascoResult.price.get(0).getText()).toContain(test_1.price, "The price is not fits filters and company")
        expect(await kascoResult.companyName.get(1).getText()).toContain(test_2.company, "Company not in the list")
        expect(await kascoResult.price.get(1).getText()).toContain(test_2.price, "The price is not fits filters and company")
        expect(await kascoResult.companyName.get(2).getText()).toContain(test_3.company, "Company not in the list")
        expect(await kascoResult.price.get(2).getText()).toContain(test_3.price, "The price is not fits filters and company")
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
    it('Sort by Rating check', async function () {
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

        await kascoResult.sortRating()

        var sorted = [], unSorted = []
        await unSorted.push((kascoResult.rating_1).count(), (kascoResult.rating_2).count(), (kascoResult.rating_3).count())
        var sorted = unSorted.slice()
        sorted = sorted.sort()
        expect(await sorted).toEqual(unSorted, "Sorting by Rating is Failed")

    })
    afterAll(() => {

    })
})
