import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SubjectServiceProvider } from '../../providers/subjectservice/subjectservice';
import { Subject } from '../../models/subjects';
import { Subscription } from 'rxjs/Subscription';




@IonicPage()
@Component({
  selector: 'page-grade',
  templateUrl: 'grade.html',
})
export class GradePage {
  subjects: Subject[];
  subs: Subscription

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public subServPro: SubjectServiceProvider
) {

}
private getSubject(){
  this.subs = this.subServPro.getSubject().subscribe(
    (subjects:Subject[]) => this.subjects = subjects
  );
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GradePage');
  }

}