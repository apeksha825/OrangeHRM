import {
    expect,
    Page,
} from '@playwright/test';

export class AddEmployeePage {

    constructor(
        private readonly page: Page
    ) {}

    private readonly firstName =
        'input[name="firstName"]';

    private readonly middleName =
        'input[name="middleName"]';

    private readonly lastName =
        'input[name="lastName"]';

    private readonly employeeId =
        '.oxd-input';

    private readonly saveButton =
        'button[type="submit"]';

    private readonly personalDetails =
        'h6:has-text("Personal Details")';

    async enterFirstName(
        value: string
    ): Promise<void> {

        await this.page
            .locator(this.firstName)
            .fill(value);
    }

    async enterMiddleName(
        value: string
    ): Promise<void> {

        await this.page
            .locator(this.middleName)
            .fill(value);
    }

    async enterLastName(
        value: string
    ): Promise<void> {

        await this.page
            .locator(this.lastName)
            .fill(value);
    }

    async save(): Promise<void> {

        await this.page
            .locator(this.saveButton)
            .click();
    }

    async addEmployee(
        firstName: string,
        middleName: string,
        lastName: string
    ): Promise<void> {

        await this.enterFirstName(firstName);

        await this.enterMiddleName(middleName);

        await this.enterLastName(lastName);

        await this.save();
    }

    async expectEmployeeCreated(): Promise<void> {

    await expect(this.page).toHaveURL(
        /\/pim\/viewPersonalDetails/,
        {
            timeout: 30000,
        }
    );

  //  await expect(this.personalDetails).toBeVisible({
      //  timeout: 30000 });
}
    
}