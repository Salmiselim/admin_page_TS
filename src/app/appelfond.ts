import { Client } from './client';

export class Appelfond {
  createdAt: Date;
  client: Client;
  b50: number;
 b20: number;
  b10: number;
  b5: number;
  monnaie: number;

  constructor(date: Date, client: Client, B50: number, B20: number, B10: number, B5: number, monnaie: number) {
    this.createdAt = date;
    this.client = client;
    this.b50 = B50;
    this.b20 = B20;
    this.b10 = B10;
    this.b5 = B5;
    this.monnaie = monnaie;
  }
}
