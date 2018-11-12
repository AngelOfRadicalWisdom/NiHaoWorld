import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewCenter } from '../../Models/reviewcenter.model';
import { PhpServerProvider} from '../../providers/php-server/php-server';
/**
 * Generated class for the LearningPathSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learning-path-selection',
  templateUrl: 'learning-path-selection.html',
})
export class LearningPathSelectionPage {
  requestData;
revcenterlist:any;
learningpath:any;
learningpathdata=[];
  list = []; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public PhpServer:PhpServerProvider) {

  }
  ngOnInit(){
    this.requestData=this.PhpServer.getUsername();
    this.PhpServer.getLearningPath(this.requestData,'m/reviewee/learningpath/selection').then(data=> {     
     // result.json();
      this.revcenterlist = data; 
  //   this.revcenterlist.json();
     this.list=this.revcenterlist;
      // console.log(this.revcenterlist);  
       console.log (this.revcenterlist) ;
     });
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LearningPathSelectionPage');
  }
  
  viewLearningPath(){
    this.requestData=this.PhpServer.getUsername();


  }

}
