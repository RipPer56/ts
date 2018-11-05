import { Injectable } from '@angular/core';
import { Loading, LoadingController } from 'ionic-angular';


@Injectable()
export class LoadService {
  loader: Loading;

  constructor(private loadCtrl: LoadingController) {

  }


  start(msg?:string){
    this.loader = this.loadCtrl.create({
      content: 'Chargement ...',
    });
    if(msg){
      this.loader.setContent(msg)
    }
    this.loader.present()
  }
  stop(){
    if(this.loader){
      this.loader.dismiss();
    }
  }




}
