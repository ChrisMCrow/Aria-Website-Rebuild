import { Injectable } from '@angular/core';
import { Feature } from './feature.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FeatureService {
  features: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.features = database.list('features');  
    console.log(this.features);
  }

  getFeatures() {
    return this.features;
  }

}
