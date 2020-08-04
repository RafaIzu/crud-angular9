import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../products/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

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

  updateComponent(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('produto atualizado com sucesso!', true)
      this.router.navigate(["/products"])
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
