import { element, ElementFinder,by, ElementArrayFinder } from "protractor";

export class formfilling
{
    
    

    logoutbutton:ElementFinder;
    
    constructor()
    {
               
        
        this.logoutbutton=element(by.css("a[href='#/login']"));
        // this.LoginUserCount=element.all(by.css("ul[class='ng-scope']"));
        // this.ExistinguserLogin=element(by.model("vm.username"));
        // this.ExistingUserPwd=element(by.model("vm.password"));
    }

}