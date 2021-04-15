
/*====================================================
                        FIREBASE
====================================================*/
var firebaseConfig = {
    apiKey: "AIzaSyBXWdtGzaFYTU9xePsA_2YelVydbYl8q98",
    authDomain: "medicalx-analysis.firebaseapp.com",
    projectId: "medicalx-analysis",
    storageBucket: "medicalx-analysis.appspot.com",
    messagingSenderId: "409381242479",
    appId: "1:409381242479:web:6512eaeee5fe38345c6f9a",
    measurementId: "G-ZJ5CN8RE5H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


/*====================================================
                        SERVICES
====================================================*/
$(function () {

    // animate on scroll
    new WOW().init();
});


/*====================================================
                    SMOOTH SCROLLING
====================================================*/
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});