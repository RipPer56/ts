import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { first } from 'rxjs/operators/first';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  authState: any = null;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private modalCtrl: ModalController) {
  }

  async signUp(newUser: User, password: string): Promise<void> {
    const createdUser = await this.afAuth.auth.createUserWithEmailAndPassword(newUser.email, password);
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${createdUser.uid}`);
    const userData: User = {
      uid: createdUser.uid,
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      cin: newUser.cin.toLowerCase(),
      adherentNum: newUser.adherentNum.toLowerCase(),
    };
    return userRef.set(userData);

  }

  resetPassword(email: string): Promise<any> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  setPersistence(rememberMe: boolean) {
    if (rememberMe) {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    }
    else {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    }
  }

  loginWithEmail(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
      })
      .catch(error => {
        throw error;
      });
  }

  logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  userChanges(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }

  userChangesSnapshotObs(): Observable<firebase.User | null> {
    return this.afAuth.authState.pipe(first());
  }


  reAuthenticate(identity: firebase.User | null): Promise<void> {
    if (!identity) {
      return Promise.reject(Error('Erreur de connection'));
    }
    return this.promptPassword()
      .then(password => {
        if (!password) {
          return Promise.reject(Error('Erreur de connection'));
        }
        const credentials = firebase.auth.EmailAuthProvider.credential(identity.email as string, password);
        return identity.reauthenticateWithCredential(credentials);
      });
  }

  private promptPassword(): Promise<string> {
    return new Promise((resolve, reject) => {
      const modalPage = this.modalCtrl.create('prompt-password');
      modalPage.present().catch(reject);
      modalPage.onWillDismiss(resolve);
    });
  }
}



