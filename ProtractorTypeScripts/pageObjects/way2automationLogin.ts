import { element, ElementFinder,by, ElementArrayFinder } from "protractor";
import { commonFunctions } from "../MainBase/common/commonFunctions";

export class way2automationLogin 
{
    
    
    UserName:ElementFinder;
    password:ElementFinder;
    UserDescription:ElementFinder;
    LoginButton:ElementFinder;
    AfterLoginMessage:ElementFinder;
    LoginFailure:ElementFinder;
    usernametootltip:ElementFinder;
    logoutbutton:ElementFinder;
    
    
    constructor()
    {
               
        this.UserName=element(by.model("Auth.user.name"));
        this.password=element(by.model("Auth.user.password"));
        this.UserDescription=element(by.model('model[options.key]'));
        this.LoginButton=element(by.buttonText("Login"));
        this.AfterLoginMessage=element(by.xpath("//div[@class='ng-scope']/p"));
        this.LoginFailure=element(by.css("div.alert.alert-danger.ng-binding.ng-scope"));
        this.usernametootltip=element(by.css("div[ng-message='minlength, maxlength']"));
        this.logoutbutton=element(by.css("a[href='#/login']"));
        // this.LoginUserCount=element.all(by.css("ul[class='ng-scope']"));
        // this.ExistinguserLogin=element(by.model("vm.username"));
        // this.ExistingUserPwd=element(by.model("vm.password"));
    }

}