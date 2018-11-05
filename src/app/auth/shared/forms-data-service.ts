import { Injectable } from '@angular/core';


@Injectable()
export class FormsDataService {

  private emailAddress: string = '';

  constructor() {
  }

  getEmailAddress(): string {
    return this.emailAddress;
  }

  setEmailAddress(emailAddress: string): void {
    this.emailAddress = emailAddress;
  }

}



