import { Component } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';

const TABLE_DATA: CreditCard[] = [
  {
    id: 1,
    name: 'Bank of America',
    description: "Bank of America offers customers with various options",
    bankName: "Bank of America",
    maxcredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: "700-900",
    annualFee: 4,
    termsAndConditions: "Following are the terms and conditions",
    createdDate: "2023-31-08",
    updatedDate: "2023-31-08",
  },
  {
    id: 2,
    name: 'Bank of America',
    description: "Bank of America offers customers with various options",
    bankName: "Bank of America",
    maxcredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: "700-900",
    annualFee: 4,
    termsAndConditions: "Following are the terms and conditions",
    createdDate: "2023-31-08",
    updatedDate: "2023-31-08",
  },
  {
    id: 3,
    name: 'Bank of America',
    description: "Bank of America offers customers with various options",
    bankName: "Bank of America",
    maxcredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: "700-900",
    annualFee: 4,
    termsAndConditions: "Following are the terms and conditions",
    createdDate: "2023-31-08",
    updatedDate: "2023-31-08",
  }
];

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})
export class CreditcardsComponent {

  displayColumns = ["select", "id", "name", "description", "bankName", "maxCredit", "interestRate", "active", "recommendedScore"];

  dataSource = new MatTableDataSource(TABLE_DATA);
}
