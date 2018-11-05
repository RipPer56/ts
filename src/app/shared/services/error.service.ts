import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from '@app/env';
import { Platform } from 'ionic-angular';
import { AuthService } from './auth.service';
import { errorMessages } from './error.messages';
import { ToastService } from './toast.service';

@Injectable()
export class ErrorService implements ErrorHandler {

  constructor(public platform: Platform,
              private toastService: ToastService,
              private authService: AuthService) {
  }

  handleError(error: any): void {
    this.logError(error);
  }

  sendError(error: any) {
    if (this.isErrorValidationActive(error)) {
      let msg = error.error.error.map((e: any) => e.msg).join('');
      this.handleError(msg);
    } else {
      console.log(error);
      if (!this.isAuthentificated(error)) {
        if (error.status === 404)
          this.handleError('Le service est indisponible pour le moment. Réessayez plus tard.');
        else {
          this.handleError('L\'application a rencontré des difficultés. Réessayez plus tard et prévenez-nous si le problème persiste.');
        }
      } else {
        this.authService.logout().then((value) => {
        });
      }
    }
  }

  private logError(error: any): void {

    try {

      console.error(error);

      let tipMessage: string | null = null;
      if (error && error.code) {
        tipMessage = errorMessages[error.code] || error.code;
      }
      if (error && error.error) {
        const err = error.error;
        tipMessage = errorMessages[err.code] || err.message;
      }
      if (!tipMessage) {
        tipMessage = (environment.production
          ? 'Navré, une erreur inattendue gêne l\'application. Vous pouvez essayer de relancer l\'application. ' +
          'Prévenez le développeur si l\'erreur persiste.'
          : error && error.message || error) as string;
      }
      tipMessage = tipMessage.substr(0, 500);
      this.toastService.toast(tipMessage);

    } catch (e) {
      console.error(e);
    }
  }

  private isErrorValidationActive(error: any): boolean {
    return error.status === 404 && error.error.typeError != undefined;
  }

  isAuthentificated(error: any): boolean {
    return (error.status === 401 || error.status === 400);
  }
}
