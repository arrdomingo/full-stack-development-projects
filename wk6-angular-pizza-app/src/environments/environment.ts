// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,


  //added this url  //url is the same when you run the json server in cmd and look for 'Resources'
                                        //Products here is usually the parameter in db.json 
  apiUrlProducts: 'http://localhost:3000/Products',

  //added this url  //url is the same when you run the json server in cmd and look for 'Resources'
                                    //Cart is the parameter in db.json
  apiUrlCart: 'http://localhost:3000/Cart'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
