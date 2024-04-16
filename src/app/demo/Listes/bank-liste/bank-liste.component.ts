import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Bank } from '../../../bank';
import { BankService } from '../../../bank.service';
import { BankSelectList } from '../../../bank-list-selec.service';
@Component({
  selector: 'app-bank-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bank-liste.component.html',
  styleUrl: './bank-liste.component.scss'
})
export class BankListeComponent implements OnInit {
  banks: Bank[] = [];
  checkedItems: string[] = [];
  constructor( private router: Router, private bankService: BankService ,private bankSelectList: BankSelectList) {}
  ngOnInit(): void {
    this.initializePage();
    this.bankService.getBanks().subscribe(data => {
      this.banks = data;
    });
  }

  add(): void {
    this.router.navigate(['/addbq']);
  }

  deleteBank(code: string): void {
    this.bankService.deleteBank(code).subscribe(() => {
      this.banks = this.banks.filter(bank => bank.code_Bank !== code);
    });
  }
  edit(codebq: string) {
    this.router.navigate(['/editbq',codebq ]);
  }

  initializePage(): void {
    const storedCheckedItems = localStorage.getItem('checkedItems');
    if (storedCheckedItems) {
      this.checkedItems = JSON.parse(storedCheckedItems);
    }
    this.bankService.getBanks().subscribe(data => {
      this.banks = data;
    });
  }
  onCheckboxChange(code: string): void {
    if (this.checkedItems.includes(code)) {
      this.checkedItems = this.checkedItems.filter(item => item !== code);
      this.bankSelectList.removeSelectedItem(code);
    } else {
      this.checkedItems.push(code);
      this.bankSelectList.addSelectedItem(code);
    }
    localStorage.setItem('checkedItems', JSON.stringify(this.checkedItems));
    console.log('Checked items updated:', this.checkedItems);
    console.log('selectitem',this.bankSelectList.getSelectedItems())
  }
}
