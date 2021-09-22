import { element, ElementFinder , by, ElementArrayFinder } from "protractor";
import { commonFunctions } from "../MainBase/common/commonFunctions";

export class CustomerPage extends commonFunctions{

    //Banking page elments
    
    private CustomersBtn: ElementFinder= element(by.buttonText("Customers"));
    private SearchTxtBox: ElementFinder= element(by.model("searchCustomer"));
    private serachuserName: ElementFinder= element(by.css("tbody td:nth-child(1)"));
    private mytabel: ElementArrayFinder= element.all(by.css('tbody'));
    private allrows: ElementArrayFinder=element.all(by.css("tr"));


    // Banking page methods starts
    

    // 
    public async clickCustomersBtn()
    {
        this.click(this.CustomersBtn);
    }

    async searchTxtBoxMsg(SearchMsg: string){
        
    {
        await this.clearAndType(this.SearchTxtBox, SearchMsg);
    }

    }

    async validateSearch(){
        let text= await this.serachuserName;
        this.assertText(await text.getText(), "sri" )
        console.log ("Title:" + await text.getText() + " is validated successfully"); 
        
    }
    
    
    async mydata(){
        this.allrows.map(async(ele, index)=>{
            let data= ele.$$("td").get(0)
            return await data.getText()
    })

        
    }
}
