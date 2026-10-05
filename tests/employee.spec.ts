import{test} from '../fixtures/test-fixtures';
import { Expect,Page} from '@playwright/test';
import { PIMPage } from '../src/pages/PIMPage';
import employeeData
    from '../testdata/employeeData.json';
   
import { AddEmployeePage }
    from '../src/pages/AddEmployeePage';
import { LoginPage } from '../src/pages/LoginPage';

    for(const emp of employeeData)
    {
        test(`create employee ${emp.firstName} ${emp.lastName}`,{tag: '@regression'},async({page,pimpage,addemployeepage})=>
        {
             console.log('Current URL:', page.url());
               await pimpage.navigateToPIM();
           //await pimpage.openPIM();
          // await  pimpage.openEmployeeList();
            await pimpage.clickAdd();   

            await addemployeepage.addEmployee(emp.firstName,emp.middleName,emp.lastName);
            await addemployeepage.expectEmployeeCreated();

        });
    }
