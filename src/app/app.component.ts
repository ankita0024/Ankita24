import { HelpPage } from './../pages/help/help';
import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
// import {BookReadPage} from '../pages/bookRead/bookRead';
// import {RecommendationPage} from '../pages/recommendation/recommendation';
// import {WishListPage} from '../pages/wishList/wishList';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
  rootPage: any = TabsPage;
 
  constructor(public platform: Platform
               ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
//   openBookRead()
// {
//   this.navCtrl.push(BookReadPage);
// } 
//  openRecommendation()
// {
//   this.navCtrl.push(RecommendationPage);
// } 
//  openWishList()
// {
//   this.navCtrl.push(WishListPage);
// }
// doLogout(){
//    this.userData.logout();
// }

}
