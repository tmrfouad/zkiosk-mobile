import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-product-create',
  templateUrl: 'product-create.html',
})
export class ProductCreatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  product: any;

  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      title: ['', Validators.required],
      description: ['']
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

  createItem() {

  }
}
