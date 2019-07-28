import { Component, OnInit, Input } from '@angular/core';
import { CardlessService } from '../cardless.service';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ammount',
  templateUrl: './ammount.component.html',
  styleUrls: ['./ammount.component.css']
})

export class AmmountComponent implements OnInit {

  private account:Account = new Account;

  constructor(private cardlessService:CardlessService, private router:Router) { }

  ngOnInit() {
    this.cardlessService.getSelectedAccount().subscribe( (selectedAccount) => {
      this.account = selectedAccount;
    });
  }

  generateCode(ammount:number) {
    this.cardlessService.setSelectedAmmount(ammount);
    this.router.navigateByUrl("accounts/withdrawal-ammount/cardless-code");
  }

}
