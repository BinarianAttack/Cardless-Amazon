import { Component, OnInit } from '@angular/core';
import { CardlessService } from '../cardless.service';
import { Account } from '../account';
import { Observable } from 'rxjs';
import { CardlessCode } from '../cardless-code';

@Component({
  selector: 'app-cardless-code',
  templateUrl: './cardless-code.component.html',
  styleUrls: ['./cardless-code.component.css']
})
export class CardlessCodeComponent implements OnInit {

  private cardlessCode:CardlessCode = new CardlessCode();
  private account:Account = new Account();
  private ammount:number;


  constructor(private cardlessService:CardlessService) { }

  ngOnInit() {
    this.cardlessService.getSelectedAmmount().subscribe( (selectedAmmount) => {
      this.ammount = selectedAmmount;
    });

    this.cardlessService.getSelectedAccount().subscribe( (selectedAccount) => {
      this.account = selectedAccount;
      this.account.id = selectedAccount["accountId"];
    });

    this.cardlessService.postCode(this.account.id, this.ammount).subscribe( (newCardlessCode) => {
      this.cardlessCode = newCardlessCode;
      console.log(newCardlessCode);
    });
  }

}
