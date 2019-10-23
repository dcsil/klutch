import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-displaytext',
  templateUrl: './displaytext.page.html',
  styleUrls: ['./displaytext.page.scss'],
})
export class DisplaytextPage implements OnInit {

  selectedImage: string;
  imageText: string;

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  goToSuccessPage(){
    this.storage.set('name', 'Max');
    console.warn("HEo")
    this.router.navigateByUrl(`success`);

  }

}
