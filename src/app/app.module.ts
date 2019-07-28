import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardlessService } from './cardless.service';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { CardlessCodeComponent } from './cardless-code/cardless-code.component';
import { AmmountComponent } from './ammount/ammount.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountsListComponent,
    CardlessCodeComponent,
    AmmountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CardlessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
