import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [

    {path:"",component:HeaderComponent},
    {path:"form",component:FormComponent},
    {path:"table",component:TableComponent},
    {path:"update/:userId",component:FormComponent},
    
    
];
