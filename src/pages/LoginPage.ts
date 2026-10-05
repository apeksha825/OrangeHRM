import{test,expect}from '@playwright/test'
import { Page } from 'playwright';

    

export class LoginPage
{
    //Locators
    constructor(private readonly page:Page)
    {
        this.page=page;
    }

    private readonly usernameinput='[placeholder="Username"]';
    private readonly password='[name="password"]';
    async navigatetoUrl()
    {
        await this.page.goto('/web/index.php/auth/login');

    }
 async enterUsername(username:string)
 {
   await this.page.locator(this.usernameinput).fill(username);
  

 }
 async enterPassword(password:string)
 {
   
    await this.page.locator(this.password).fill(password);

 }

 async clickOnloginbutton()
 {
   await this.page.getByRole('button',{'name':'Login'}).click();
 }
    


}