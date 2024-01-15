import { Injectable } from '@angular/core';
import { FIREBASE_COLLECTION } from '../../@core/firebase/@constans/firebase-collection.contant';
import { FirebaseCollectionBase } from '../../@core/firebase/firebase-collection.base';

@Injectable({ providedIn: 'root' })
export class NewsPartnerService extends FirebaseCollectionBase {
  constructor() {
    super(FIREBASE_COLLECTION.newsPartner);
  }
}
