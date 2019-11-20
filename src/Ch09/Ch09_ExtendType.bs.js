'use strict';


function accessTypeName(a) {
  if (a >= 461894857) {
    return "public";
  } else {
    return "private";
  }
}

function siteSummary(app) {
  var variant = app[0];
  if (variant !== 737307010) {
    if (variant >= 936519468) {
      return app[1][1] + " - corporate site (public)";
    } else {
      var match = app[1];
      return match[0][1] + (" - commerce site (" + (accessTypeName(match[1]) + ")"));
    }
  } else {
    var match$1 = app[1];
    var a = match$1[1];
    var s = match$1[0][1];
    if (a >= 461894857) {
      return s + " - blog (public - login-based access for authors)";
    } else {
      return s + (" - corporate blog (" + (accessTypeName(a) + ")"));
    }
  }
}

var mysite = /* `CorporateSite */[
  936519468,
  /* `Domain */[
    -501930652,
    "www.acme.com"
  ]
];

console.log(siteSummary(mysite));

var myblog = /* `Blog */[
  737307010,
  /* tuple */[
    /* `Domain */[
      -501930652,
      "www.contentgardening.com"
    ],
    /* Public */461894857
  ]
];

console.log(siteSummary(myblog));

var corpinternalblog = /* `Blog */[
  737307010,
  /* tuple */[
    /* `Domain */[
      -501930652,
      "internalblog.acme.com"
    ],
    /* Private */-692038429
  ]
];

console.log(siteSummary(corpinternalblog));

function appSummary(app) {
  if (app[0] !== -488809772) {
    return siteSummary(app);
  } else {
    return app[1][1] + " - social app";
  }
}

console.log("---");

var fb = /* `SocialApp */[
  -488809772,
  /* `Domain */[
    -501930652,
    "facebook.com"
  ]
];

console.log(appSummary(fb));

function appSummaryImproved(app) {
  if (app[0] !== -488809772) {
    return siteSummary(app);
  } else {
    return app[1][1] + " - social app";
  }
}

console.log("------");

console.log(appSummaryImproved(mysite));

console.log(appSummaryImproved(myblog));

console.log(appSummaryImproved(corpinternalblog));

console.log(appSummaryImproved(fb));

exports.accessTypeName = accessTypeName;
exports.siteSummary = siteSummary;
exports.mysite = mysite;
exports.myblog = myblog;
exports.corpinternalblog = corpinternalblog;
exports.appSummary = appSummary;
exports.fb = fb;
exports.appSummaryImproved = appSummaryImproved;
/*  Not a pure module */
