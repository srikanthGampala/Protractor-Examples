import { element, ElementFinder , by } from "protractor";
import { commonFunctions } from "../MainBase/common/commonFunctions";

export class AddCustoimerModule extends commonFunctions{

    //Banking page elments
    private  header:ElementFinder = element(by.css("strong.mainHeading"));
    private ManagerLoginBtn: ElementFinder= element(by.buttonText("Bank Manager Login"));
    private MainAddCustomerBtn: ElementFinder= element(by.buttonText("Add Customer"));
    private FirstNameTxt:ElementFinder=element(by.model("fName"));
    private LastNameTxt: ElementFinder=element(by.model("lName"));
    private PostalCodeTxt: ElementFinder=element(by.model("postCd"));
    private addCustomerBtn: ElementFinder= element(by.css("button.btn.btn-default"))

    // Banking page methods starts
    public async validateHeading()
    {
        let text= await this.header;
        this.assertText(await text.getText(), "XYZ Bank" )
        console.log ("Title:" + await text.getText() + " is validated successfully"); 
    }

    // 
    public async bankmanagerLogin()
    {
        this.click(this.ManagerLoginBtn);
    }

    async clickMainAddcustomerBtn(){
        await this.click(this.MainAddCustomerBtn);

    }
    async enterFirstName(fname: string)
    {
        await this.clearAndType(this.FirstNameTxt, fname);
    }
    async lastName(lname: string)
    {
        await this.clearAndType(this.LastNameTxt, lname);
    }
    async postalcode(pcode: string)
    {
        await this.clearAndType(this.PostalCodeTxt, pcode);
    }
    async clickaddCustomer()
    {
       await this.click(this.addCustomerBtn);
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
         // public async addingCustomer()
    // {
    //     this.click(await this.MainAddCustomerBtn);
    //     this.type (this.FirstNameTxt,"sri");
    //     this.type (this.LastNameTxt,"kanth");
    //     this.type (this.PostalCodeTxt,"500074");
    //     this.click(this.addCustomerBtn);
    //     let alertMsg= await this.getTextFromAlert();
    //     console.log("The alerst Message is: " + alertMsg);
    //     this.acceptAlert();
    //     console.log("custoimer added successfully");
    // }
}
