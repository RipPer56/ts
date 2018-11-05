import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicModule } from 'ionic-angular';
import { BeAssurApp } from './app.component';
import { CoreModule } from './core/core.module';
import * as moment from 'moment';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment.dev';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { SharedModule } from "./shared/shared.module";
import { registerLocaleData } from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HttpsRequestInterceptor } from "./core/http.interceptor";
import { HttpCachingInterceptor } from './core/http.caching.interceptor';
import { CacheService } from './shared/services/cache-service';

registerLocaleData(localeFr, 'fr-FR');
moment.locale('fr');

@NgModule({
  declarations: [
    BeAssurApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(BeAssurApp, {
      preloadModules: true
    }),
    IonicStorageModule.forRoot(),
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    SharedModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BeAssurApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    {provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpCachingInterceptor, multi: true},
    CacheService,
  ],
})
export class AppModule {
}
