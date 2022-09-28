import { ProdutcServiceService } from './../../../service/produtc-service.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product !:Product;

  constructor(private productService: ProdutcServiceService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id ?? '').subscribe((product: Product) =>{ this.product = product})
    
  }

  updateProduct():void{
    this.productService.update(this.product).subscribe(()=>{
      this.productService.showMensage("Produto atualizado com Sucesso!");
      this.router.navigate(["/products"]);
    })
  }
  cancel():void{
    this.router.navigate(["/products"]);
  }
}
