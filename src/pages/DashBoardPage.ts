import{expect,test} from '@playwright/test'
import { Page } from 'playwright';

export class DashboardPage
{
constructor(private readonly page:Page)
{
    this.page=page;
}

   private readonly dashboardHeader='h6:has-text("Dashboard")';

    private readonly userDropdown =
        '.oxd-userdropdown-name'; 

    async DashboardDisplayed()
         {

        await expect(
            this.page.locator(
                this.dashboardHeader
            )
        ).toBeVisible();
    }

    async expectLoggedInUser(
        username: string
    ): Promise<void> {

        await expect(
            this.page.locator(
                this.userDropdown
            )
        ).not.toContainText('');
    }
}
