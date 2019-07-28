import { Component, OnInit } from '@angular/core';
import { CardlessService } from '../cardless.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private customer:Customer = new Customer();

  constructor(private cardlessService:CardlessService) { }

  ngOnInit() {
    this.cardlessService.getCustomer(123456789).subscribe((data) => {
      this.customer = data as Customer;
    });
  }

}
