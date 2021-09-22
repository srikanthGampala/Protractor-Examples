import { element, ElementFinder,by, ElementArrayFinder } from "protractor";

export class registrationform
{
    
    
    FirstName:ElementFinder;
    LastName:ElementFinder;
    MartialStatus:ElementArrayFinder;
    hobby:ElementArrayFinder;
    country:ElementFinder;
    DOBMonth:ElementFinder;
    DOBDay:ElementFinder;
    DOBYear:ElementFinder;
    countryvalue:ElementFinder;
    DOBMonthvalue:ElementFinder;
    DOBdayvalue:ElementFinder;
    DOBYearvalue:ElementFinder;
    AboutYourself:ElementFinder;
    password:ElementFinder;
    confirmpassword:ElementFinder;
    choosefile:ElementFinder;
    phonenumber:ElementFinder;
    username:ElementFinder;
    email:ElementFinder;
    submitbuton:ElementFinder;
    constructor()
    {
               
        
        this.FirstName=element(by.xpath("//fieldset[@class='fieldset']//input[@name='name']"));
        this.LastName=element(by.xpath("//p[2]//input[1]"));
        this.MartialStatus=element.all(by.xpath("//fieldset[2]//div[1]/label"));
        this.hobby=element.all(by.xpath("//fieldset[3]//div[1]/label"));
        this.country=element(by.xpath("(//select)[1]"));
        this.countryvalue=element(by.css("option[value='India']"));
        this.DOBMonth=element(by.xpath("(//select)[2]"));
        this.DOBMonthvalue=element(by.css("option[value='1']"));
        this.username=element(by.xpath("//fieldset[@class='fieldset']//input[@name='username']"));
        this.DOBDay=element(by.xpath("(//select)[3]"));
        this.DOBdayvalue=element(by.xpath("(//option[@value='1'][normalize-space()='1'])[2]"));
        this.DOBYear=element(by.xpath("(//select)[4]"));
        this.DOBYearvalue=element(by.css("option[value='2014']"));
        this.AboutYourself=element(by.xpath("//form[@id='register_form']//fieldset//textarea"));
        this.password=element(by.css("fieldset[class='fieldset'] input[name='password']"));
        this.confirmpassword=element(by.css("input[name='c_password']"));
        this.choosefile=element(by.xpath("//input[@type='file']"));
        this.phonenumber=element(by.css("fieldset[class='fieldset'] input[name='phone']"));
        this.email=element(by.xpath("//fieldset[@class='fieldset']//input[@name='email']"));
        this.submitbuton=element(by.xpath("//input[@value='submit']"));

        //select dropdown= new Select(staticDropdown);
               
        // this.LoginUserCount=element.all(by.css("ul[class='ng-scope']"));
        // this.ExistinguserLogin=element(by.model("vm.username"));
        // this.ExistingUserPwd=element(by.model("vm.password"));
    }
    
}