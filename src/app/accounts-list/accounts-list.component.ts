import { Component, OnInit } from '@angular/core';
import { CardlessService } from '../cardless.service';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {

  private accounts:Account[] = [];
  private consumerId:number;
  private account:Account;

  constructor(private cardlessService:CardlessService, private router:Router) { 
  }

  ngOnInit() {
    this.cardlessService.getAccounts(123456789).subscribe( (data) => {
      this.accounts = data["accounts"] as Account[];
      this.consumerId = data["consumerId"] as number;
    });
  }

  accountforCode(accountId:number) {
    this.account = this.accounts[accountId-1];
    this.cardlessService.setSelectedAccount(this.account);
    this.router.navigateByUrl('accounts/withdrawal-ammount');
  }

  ngOnDestroy() {
    
  }

}
