/*import{test as base,expect, TestFixture}from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { DashboardPage } from '../src/pages/DashBoardPage';
import { PIMPage } from '../src/pages/PIMPage';
import { AddEmployeePage } from '../src/pages/AddEmployeePage';
type TestFixtures={
    loginpage:LoginPage;
    dashboardpage:DashboardPage;
    pimpage:PIMPage;
    addemployeepage:AddEmployeePage;
};
export const test=base.extend<TestFixtures>({
loginpage:async({page},use)=>
{
    const loginpage=new LoginPage(page);    
    await use(loginpage);
},
dashboardpage:async({page},use)=>
{
    const dashboardpage=new DashboardPage(page);
    await use(dashboardpage);
},
pimpage:async({page},use)=>
{
    const pimpage=new PIMPage(page);
    await use(pimpage);
},
addemployeepage:async({page},use)=>
{
    const addemployeepage=new AddEmployeePage(page);
    await use(addemployeepage);
}
});
export { expect };*/
import { test as base, expect } from '@playwright/test';

import { PIMPage } from '../src/pages/PIMPage';
import { AddEmployeePage } from '../src/pages/AddEmployeePage';
import { LoginPage } from '../src/pages/LoginPage';
import { DashboardPage } from '../src/pages/DashBoardPage';

type Fixtures = {
  pimpage: PIMPage;
  addemployeepage: AddEmployeePage;
   loginpage:LoginPage;
    dashboardpage:DashboardPage;
};

export const test = base.extend<Fixtures>({

  pimpage: async ({ page }, use) => {

    // The storageState has already authenticated this browser context.
    // Now navigate the new page into the application.
    await page.goto('/web/index.php/dashboard/index');

    await expect(page).toHaveURL(/dashboard/);

    const pimPage = new PIMPage(page);

    await use(pimPage);
  },
  loginpage:async({page},use)=>
{
    const loginpage=new LoginPage(page);    
    await use(loginpage);
},
dashboardpage:async({page},use)=>
{
    const dashboardpage=new DashboardPage(page);
    await use(dashboardpage);
},

  addemployeepage: async ({ page }, use) => {

    const addEmployeePage = new AddEmployeePage(page);

    await use(addEmployeePage);
  },
});

export { expect };