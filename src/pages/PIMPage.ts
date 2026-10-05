import { Page, expect, Locator } from '@playwright/test';

export class PIMPage {

  private readonly pimMenu: Locator;
  private readonly employeeList: Locator;
  private readonly addButton: Locator;

  constructor(private readonly page: Page) {

    this.pimMenu = this.page.locator(
      'a[href="/web/index.php/pim/viewPimModule"]'
    );

    this.employeeList = this.page.locator(
      'a[href*="/pim/viewEmployeeList"]'
    );

   this.addButton = page.locator(
  'button.oxd-button.oxd-button--secondary[type="button"]'
).filter({ hasText: 'Add' });
  }

  async navigateToPIM(): Promise<void> {

    console.log('Current URL before PIM:', this.page.url());

    await expect(this.pimMenu).toBeVisible({
      timeout: 15000,
    });

    await this.pimMenu.click();

    await expect(this.page).toHaveURL(
      /\/web\/index\.php\/pim\/viewEmployeeList/
    );
  }

  async openEmployeeList(): Promise<void> {

    await expect(this.employeeList).toBeVisible({
      timeout: 15000,
    });

    await this.employeeList.click();

    await expect(this.page).toHaveURL(
      /\/web\/index\.php\/pim\/viewEmployeeList/
    );
  }

 async clickAdd(): Promise<void> {
await expect(this.page.locator('.oxd-table')).toBeVisible({timeout: 30000,});
  console.log('Current URL in clickAdd:', this.page.url());

  const buttons = await this.page.locator('button').allTextContents();

  console.log('Buttons found on PIM page:', buttons);

  await expect(this.addButton).toBeVisible({timeout: 30000,});

  await this.addButton.click();

  await expect(this.page).toHaveURL(/\/web\/index\.php\/pim\/addEmployee/,{timeout: 30000, });
}
}