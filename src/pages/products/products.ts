import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  products: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private productsProvider: ProductsProvider) {
  }

  ionViewDidLoad() {
    this.productsProvider.get().subscribe((items: ArrayBuffer) => {
      this.products = Array.from(items);
    });
  }

  addItem() {
    let addModal = this.modalCtrl.create('ProductCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.productsProvider.post(item).subscribe(newItem => {
          this.products.push(newItem);
        });
      }
    })
    addModal.present();
  }

  itemTapped(event, product) {

  }

  deleteItem(product) {
    this.productsProvider.delete(product.id).subscribe(Item => {
      const indx = this.products.findIndex(p => p.id === product.id);
      this.products.splice(indx, 1);
    });
  }
}
