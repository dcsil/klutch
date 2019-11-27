import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytextPage } from './displaytext.page';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Storage } from '@ionic/storage';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';
import { BehaviorSubject } from 'rxjs';

describe('DisplaytextPage', () => {
  let component: DisplaytextPage;
  let fixture: ComponentFixture<DisplaytextPage>;

  const storageIonicMock: any = {
    get: () => new Promise<any>((resolve, reject) => resolve('test')),
  };

  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    })
  };

  const FirebaseServiceMock: any = {
    retrieveData: () => new Promise<any>((resolve, reject) => resolve('test')),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaytextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ RouterTestingModule, HttpClientTestingModule],
      providers: [
        {
          provide: Storage,
          useValue: storageIonicMock
        },
        { provide: AngularFireStorage, useValue: FirestoreStub },
        { provide: FirebaseService, useValue: FirebaseServiceMock },
        { provide: AngularFirestore, useValue: FirestoreStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaytextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
