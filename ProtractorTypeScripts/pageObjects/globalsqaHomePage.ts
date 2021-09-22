import { element, ElementFinder,by, ElementArrayFinder } from "protractor";

export class globalsqaHomePage
{
    registerButton:ElementFinder;
    FirstName:ElementFinder;
    LastName:ElementFinder;
    UserName:ElementFinder;
    password:ElementFinder;
    RegisterUser:ElementFinder;
    flashMessage:ElementFinder;
    LoginButton:ElementFinder;
    LoginMessage:ElementFinder;
    LoginUserCount:ElementArrayFinder;
    ExistinguserLogin:ElementFinder;
    ExistingUserPwd:ElementFinder;
    constructor()
    {
        this.registerButton=element(by.css("a.btn.btn-link"));
        this.FirstName=element(by.model("vm.user.firstName"));
        this.LastName=element(by.model("vm.user.lastName"));
        this.UserName=element(by.model("vm.user.username"));
        this.password=element(by.model("vm.user.password"));
        this.RegisterUser=element(by.cssContainingText('.btn.btn-primary','Register'));
        this.flashMessage=element(by.binding("flash.message"));
        this.LoginButton=element(by.buttonText("Login"));
        this.LoginMessage=element(by.css("p.ng-scope"));
        this.LoginUserCount=element.all(by.css("ul[class='ng-scope']"));
        this.ExistinguserLogin=element(by.model("vm.username"));
        this.ExistingUserPwd=element(by.model("vm.password"));
    }

}