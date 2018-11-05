import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { ToastOptions } from "ionic-angular/components/toast/toast-options";


@Injectable()
export class ToastService {

  constructor(private toastCtrl: ToastController) {
  }

  toast(codeOrMessage: string, opts?: ToastOptions): void {
    let toastOptions = (opts) ? opts : {
      message: codeOrMessage,
      showCloseButton: true,
      closeButtonText: 'Fermer',
      duration: 10000,
    };
    let toast = this.toastCtrl.create(toastOptions);
    toast.present();
  }

  infoToast(message: string) {
    let toastOptions = {
      message: message,
      showCloseButton: false,
      duration: 2500,
    };
    let toast = this.toastCtrl.create(toastOptions);
    toast.present();
  }
}
