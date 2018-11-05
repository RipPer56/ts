# Tont'in

# Wireframes

https://projects.invisionapp.com/share/N992365MU

# Ionic pro

https://dashboard.ionicjs.com/app/c448a8ff

# References

- Ionic, Firebase and Facebook: https://github.com/angular/angularfire2/blob/master/docs/ionic/v3.md
- Cron with firebase through app engine: https://github.com/firebase/functions-cron

# Questions

- Why is npm install cordova-plugin-app-preferences required?

# Issues and workarounds

- Firebase version fixed to 4.8.0 because of [this bug](https://github.com/angular/angularfire2/issues/234)
- Facebook App ID added in config.xml `config-file` temporarily because of a bug of facebook cordova plugin with cordova-android v7 ([bug](https://github.com/jeduan/cordova-plugin-facebook4/issues/599))

## Deployment on phone

- [Ionic doc](https://ionicframework.com/docs/intro/deploying/)
- Download and install Android SDK
- Activate developer mode on phone
- If ``adb devices`` indicates the phone is unauthorized: [SO question](https://stackoverflow.com/a/25546300/4717408)

## Deprecations and migrations to do

cordova-plugin-contacts: https://cordova.apache.org/news/2017/11/27/Deprecation-of-cordova-contacts-plugin.html
