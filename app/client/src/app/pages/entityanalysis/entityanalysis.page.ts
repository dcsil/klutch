import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entityanalysis',
  templateUrl: './entityanalysis.page.html',
  styleUrls: ['./entityanalysis.page.scss'],
})
export class EntityanalysisPage implements OnInit {

  docID: number;
  entityData: any;

  constructor(private router: Router, private storage: Storage, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.storage.get('currentID')
      .then(id => {
        console.log("id: ", id);
        this.docID = id;

        this.firebaseService.retrieveData("ENTITY", this.docID).then(res => {
          this.entityData = res;
          console.log("entity analysis:", this.entityData);
        });
      });
  }

  goToSuccess() {
    // update docID
    const newID = this.docID + 1;
    this.storage.set('currentID', newID)
      .then(res => {
        console.log("new ID: ", this.docID);
        this.router.navigateByUrl(`success`);
      });
  }
}
