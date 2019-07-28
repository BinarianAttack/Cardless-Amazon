import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { CardlessCodeComponent } from './cardless-code/cardless-code.component';
import { AmmountComponent } from './ammount/ammount.component';


const routes: Routes = [
  {path: "accounts", component: AccountsListComponent},
  {path: "accounts/withdrawal-ammount/cardless-code", component: CardlessCodeComponent},
  {path: "accounts/withdrawal-ammount", component: AmmountComponent},
  {path: "", redirectTo: "/accounts", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
