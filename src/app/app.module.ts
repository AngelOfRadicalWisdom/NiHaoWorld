import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { RegistrationPage } from '../pages/registration/registration';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TakelessonPage } from '../pages/takelesson/takelesson';
import { LandingPage } from '../pages/landing/landing';
import{LogInPage} from '../pages/log-in/log-in';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { PhpServerProvider } from '../providers/php-server/php-server';
import { TakediagPage } from '../pages/takediag/takediag';
import { DiagnosticexamPage } from '../pages/diagnosticexam/diagnosticexam';
import { LearningPathSelectionPage } from '../pages/learning-path-selection/learning-path-selection';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    TakelessonPage,
    LandingPage,
    LogInPage,
    TakediagPage,
    DiagnosticexamPage,
    LearningPathSelectionPage,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage,
    TakelessonPage,
    LandingPage,
    LogInPage,
    TakediagPage,
    DiagnosticexamPage,
    LearningPathSelectionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PhpServerProvider

  ]
})
export class AppModule {}
