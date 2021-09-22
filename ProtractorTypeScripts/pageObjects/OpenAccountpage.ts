import { element, ElementFinder , by } from "protractor";
import { commonFunctions } from "../MainBase/common/commonFunctions";

export class OpenAccountpage extends commonFunctions{

    //Banking page elments
    
    private openAccountBtn: ElementFinder= element(by.buttonText("Open Account"));
    private CustomerDrpdownBtn: ElementFinder= element(by.id("userSelect"));
    private SelcetnamefromDrpDown:ElementFinder=element(by.css("option[value='6']"))
    private CurencyDrpDown: ElementFinder=element(by.id("currency"));
    private SelectCurrency: ElementFinder=element(by.css("option[value='Rupee']"));
    private processBtn: ElementFinder= element(by.buttonText("Process"));

    // Banking page methods starts
    

    // 
    public async clickOnOpenAccount()
    {
        this.click(this.openAccountBtn);
    }

    async clickOnCustomerDrpDown(){
        await this.click(this.CustomerDrpdownBtn);

    }

    async validateAddedUserName(){
        let text= await this.SelcetnamefromDrpDown;
        this.assertText(await text.getText(), "sri Kanth" )
        console.log ("Title:" + await text.getText() + " is validated successfully"); 
        
    }

    async clickOnAddedUser()
    {
        await this.click(this.SelcetnamefromDrpDown);
    }
    async clickOnCurrency()
    {
        await this.click(this.CurencyDrpDown);
    }
    async selectCurrency()
    {
        await this.click(this.SelectCurrency);

    }
    async clickOnProcessBtn()
    {
       await this.click(this.processBtn);
    }
    async alertmsg()
    {
        let alertmsg= await this.getTextFromAlert();
        console.log("The alerst Message is: " + alertmsg);
    }
     async acceptAlertTxt()
     {
         await this.acceptAlert();
     }
        
}
