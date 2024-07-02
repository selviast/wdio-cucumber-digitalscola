import DashbordPage from "../pageobjects/dashboard.js";
import LoginPage from "../pageobjects/login.js";

describe('Sauce Demo Test', () => {

    it('Successful Login using visual user', async () => {
        //login using visual user

        await LoginPage.open();
        await LoginPage.login("visual_user", process.env.PASSWORD)
        await DashbordPage.validateOnPage()
    
    });

    it('Successful Login using standard user', async () => {
        //login using standard user
        await LoginPage.open();
        await LoginPage.login("standard_user", process.env.PASSWORD)

        // validate on dashboard page
        await DashbordPage.validateOnPage()
    });


    it('Successful add item to cart', async () => {
        //add to cart
        await DashbordPage.addToCart()

        // validate on page successfully add to cart
        await DashbordPage.validateAddToCart()
    });
});