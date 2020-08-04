import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from '../../products/product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  product: Product
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product =>
    this.product = product)
  }

  deleteComponent(): void {
    this.productService.delete(this.product.id).subscribe(()=>{
      this.productService.showMessage('Produto deletado com sucesso!', true)
      this.router.navigate(['/products'])
    })

  }
  cancel(): void {
    this.router.navigate(['/products'])
  }


}
