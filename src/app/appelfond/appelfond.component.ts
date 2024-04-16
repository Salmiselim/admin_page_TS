import { AppelfondService } from './../../appelfond.service';
import { Component, OnInit } from '@angular/core';
import { Appelfond } from '../appelfond';

@Component({
  selector: 'app-appelfond',
  templateUrl: './appelfond.component.html',
  styleUrl: './appelfond.component.scss'
})
export class AppelfondComponent implements OnInit  {
  Appelfond: Appelfond[] = [];
  constructor(private appelfondService: AppelfondService ) {}



  ngOnInit(): void {

    this.appelfondService.getAF().subscribe(data => {
      this.Appelfond = data;
    });
  }
}
