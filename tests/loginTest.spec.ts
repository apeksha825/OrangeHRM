import { test , expect } from '../fixtures/test-fixtures';
import { LoginPage } from '../src/pages/LoginPage';
import { DashboardPage } from '../src/pages/DashBoardPage';


import { env } from '../config/env';
test.describe("Logintests",()=>
{

     test("Valid login ",async({loginpage,dashboardpage})=>
     {
       // const loginpage=new LoginPage(page);
        //const dashboardpage=new DashboardPage(page);
     console.log("Verify the valid login");
     await loginpage.navigatetoUrl();
    await  loginpage.enterUsername(env.username);
     await loginpage.enterPassword(env.password);
     await loginpage.clickOnloginbutton();
      await dashboardpage.DashboardDisplayed();
      //await dashboardpage.expectLoggedInUser(env.username);



     })
    }
)