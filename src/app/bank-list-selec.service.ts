import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankSelectList {
  private selectedItems: string[] = [];

  constructor() {}

  addSelectedItem(item: string): void {
    this.selectedItems.push(item);
  }

  removeSelectedItem(item: string): void {
    const index = this.selectedItems.indexOf(item);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
    }
  }

  getSelectedItems(): string[] {
    console.log('Selected items:', this.selectedItems);
    return this.selectedItems;
  }
}
