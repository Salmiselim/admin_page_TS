import { Agence } from '../../../agence';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AgenceService } from '../../../agence.service';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.scss']
})
export class AgenceComponent implements OnInit {
  bankCode: string = '';
  agencies: Agence[] = [];


  constructor(private router: Router, private agenceService: AgenceService ) {}
  add(): void {
    this.router.navigate(['/addagc']);
  }

  ngOnInit() {
    this.agenceService.getAgences().subscribe(data => {
      this.agencies = data;
    });
  }
  deleteAgency(code: Number): void {
    this.agenceService.deleteAgence(code).subscribe(() => {
      this.agencies = this.agencies.filter(agency => agency.codeAgence !== code);
    });
  }

  edit(codeagence: number) {
    this.router.navigate(['/editagc', codeagence]);
  }
}
