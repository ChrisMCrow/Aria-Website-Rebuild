import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  providers: [FeatureService]
})
export class FeaturesComponent implements OnInit {
  features: FirebaseListObservable<any[]>;

  constructor(private featureService: FeatureService) { }

  ngOnInit() {
    this.features = this.featureService.getFeatures();
  }

}
