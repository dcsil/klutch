import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  val;

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('name').then((val) => {
      this.val = val;
    });
  }

  goToHome() {
    console.warn("HEY")
    this.router.navigateByUrl(``);
  }

}
