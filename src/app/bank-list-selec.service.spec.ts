import { TestBed } from '@angular/core/testing';
import { BankListSelecService } from './bank-list-selec.service';

describe('BankListSelecService', () => {
  let service: BankListSelecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankListSelecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
