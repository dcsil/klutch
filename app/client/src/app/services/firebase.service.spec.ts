import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Storage } from '@ionic/storage';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';
import { BehaviorSubject } from 'rxjs';


describe('FirebaseService', () => {

  const storageIonicMock: any = {
    get: () => new Promise<any>((resolve, reject) => resolve('test')),
  };

  const FirebaseServiceMock: any = {
    retrieveData: () => new Promise<any>((resolve, reject) => resolve('test')),
  };

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    })
  };

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule, RouterTestingModule],
    providers: [
      {
        provide: Storage,
        useValue: storageIonicMock
      },
      { provide: AngularFireStorage, useValue: FirestoreStub },
      { provide: FirebaseService, useValue: FirebaseServiceMock },
      { provide: AngularFirestore, useValue: FirestoreStub }
    ]
  }));

  it('should be created', () => {
    const service: FirebaseService = TestBed.get(FirebaseService);
    expect(service).toBeTruthy();
  });
});
