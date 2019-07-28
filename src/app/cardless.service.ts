import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';
import { BehaviorSubject, Observable } from 'rxjs';

const cardlessApi_url:string = "https://shrouded-tundra-70221.herokuapp.com/api/v1/";

@Injectable({
  providedIn: 'root'
})
export class CardlessService {

  private selectedAmmount:BehaviorSubject<number> = new BehaviorSubject(0);
  private selectedAccount:BehaviorSubject<Account> = new BehaviorSubject(new Account());

  constructor(private httpClient: HttpClient) { }

  //Component Communication
  setSelectedAmmount(ammount:number) {
    this.selectedAmmount.next(ammount);
  }

  getSelectedAmmount():Observable<number> {
    return this.selectedAmmount.asObservable();
  }

  setSelectedAccount(account:Account) {
    this.selectedAccount.next(account);
  }

  getSelectedAccount():Observable<Account> {
    return this.selectedAccount.asObservable();
  }

  //Accounts
  public getCustomer(customerId:number):Observable<any> {
    return this.httpClient.get(cardlessApi_url + "customers/" + customerId);
  }

  //Customers
  public getAccounts(customerId:number):Observable<any> {
    return this.httpClient.get(cardlessApi_url + "accounts/customers/" + customerId);
  }

  //Withdrawals
  public postCode(accountId: number, ammount: number):Observable<any> {
    return this.httpClient.post(cardlessApi_url + "withdrawals/accounts/" + accountId, JSON.parse('{ "ammount": ' + ammount + '250}'));
  }

}
