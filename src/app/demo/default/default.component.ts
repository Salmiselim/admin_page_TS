import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from '../../bank';
import { BankService } from '../../bank.service';
import { BankSelectList } from '../../bank-list-selec.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BankListeComponent } from '../Listes/bank-liste/bank-liste.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule,BankListeComponent],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export default class DefaultComponent implements OnInit {
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
      this.banks = this.banks.filter(bank => bank.code_Bank.toString() === code);
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
