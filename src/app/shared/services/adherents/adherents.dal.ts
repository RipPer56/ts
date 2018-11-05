import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { first, map } from 'rxjs/operators';
import { Adherent } from '../../../../../functions/src/sales-force/adherents/adherents.model';
import { urlEndPoints } from '../../config/endPoints';

interface UserUID {
  cin?: string,
  email?: string,
  id?: string,
  name?: string,
  uid?: string,
}

@Injectable()
export class AdherentsDal {

  constructor(private httpClient: HttpClient,
              private afs: AngularFirestore) {
  }

  getAdherentsByCIN(cin: string, adherentNum: string): Observable<Adherent[]> {
    return combineLatest(this.getAdherentsByCinFromSaleFores(cin, adherentNum), this.getListAdherentsByCinFromFirestore(cin))
      .pipe(map((a: [Adherent[], UserUID []]) => {
        return this.makeTaskTofilterAdherentList(a);
      }));
  }

  private getAdherentsByCinFromSaleFores(cin: string, adherentNum: string): Observable<Adherent[]> {
    let params = new HttpParams({
      fromObject: {
        cin: cin,
        adherentNum: adherentNum,
      },
    });
    return this.httpClient.get<Adherent[]>(urlEndPoints.adherentsUrl, {params: params});
  }


  private getListAdherentsByCinFromFirestore(cin: string): Observable<UserUID[]> {
    return this.afs.collection<UserUID>('users', ref => {
      return ref.where('cin', '==', cin);
    }).valueChanges().pipe(first())
  }

  private makeTaskTofilterAdherentList([adherentSalesForce, adherentFirestore]: [Adherent[], UserUID []]): Adherent[] {
    if (adherentSalesForce) {
      let registeredUsersIds: string[] = [];
      for (let adherent of adherentFirestore)
        registeredUsersIds.push(adherent.id + '');
      for (let adherent of adherentSalesForce) {
        adherent.isRegistered = (registeredUsersIds.indexOf(adherent.id + '') > -1);
      }
    }
    return adherentSalesForce;
  }

}
