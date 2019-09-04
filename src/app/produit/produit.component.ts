import { ProduitMockService } from './produit.mock.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../shared/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  produits: Produit[];

  constructor(private mockService: ProduitMockService) { }

  ngOnInit() {
    this.produits = this.mockService.getAll();
  }

}
