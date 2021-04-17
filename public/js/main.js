
/*====================================================
                        FIREBASE
====================================================*/
var firebaseConfig = {
    apiKey: "AIzaSyBXWdtGzaFYTU9xePsA_2YelVydbYl8q98",
    authDomain: "medicalx-analysis.firebaseapp.com",
    databaseURL: "https://medicalx-analysis-default-rtdb.firebaseio.com",
    projectId: "medicalx-analysis",
    storageBucket: "medicalx-analysis.appspot.com",
    messagingSenderId: "409381242479",
    appId: "1:409381242479:web:6512eaeee5fe38345c6f9a",
    measurementId: "G-ZJ5CN8RE5H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


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


/*====================================================
                        MAIN
====================================================*/

document.getElementById("form_main").addEventListener('submit', function(e){
    e.preventDefault();
// All variables
// Hematologie
var input1 = document.getElementById("hematologie_eritrocite").value;
var input2 = document.getElementById('hematologie_hemoglobina').value;
var input3 = document.getElementById('hematologie_hematocrit').value;
var input4 = document.getElementById('hematologie_vem').value;
var input5 = document.getElementById('hematologie_hem').value;
var input6 = document.getElementById('hematologie_chem').value;
var input7 = document.getElementById('hematologie_rdv_cv').value;
var input8 = document.getElementById('hematologie_leucocite').value;
var input9 = document.getElementById('hematologie_neutrofile').value;
var input10 = document.getElementById('hematologie_neutrofile_suta').value;
var input11 = document.getElementById('hematologie_eozinofile').value;
var input12 = document.getElementById('hematologie_eozinofile_suta').value;
var input13 = document.getElementById('hematologie_basofile').value;
var input14 = document.getElementById('hematologie_basofile_suta').value;
var input15 = document.getElementById('hematologie_limfocite').value;
var input16 = document.getElementById('hematologie_limfocite_suta').value;
var input17 = document.getElementById('hematologie_monocite').value;
var input18 = document.getElementById('hematologie_monocite_suta').value;
var input19 = document.getElementById('hematologie_trombocite').value;
var input20 = document.getElementById('hematologie_vtm').value;
var input21 = document.getElementById('hematologie_pct').value;
var input22 = document.getElementById('hematologie_pdw').value;

// Hemostaza
var input23 = document.getElementById('hemostaza_timp').value;
var input24 = document.getElementById('hemostaza_activitate').value;
var input25 = document.getElementById('hemostaza_inr').value;

// Biochimie
var input26 = document.getElementById('biochimie_acid_uric').value;
var input27 = document.getElementById('biochimie_creatinina_serica').value;
var input28 = document.getElementById('biochimie_uree_serica').value;
var input29 = document.getElementById('biochimie_glucoza_serica').value;
var input30 = document.getElementById('biochimie_tgo_ast').value;
var input31 = document.getElementById('biochimie_tgp_alt').value;
var input32 = document.getElementById('biochimie_sideremie').value;

// Imunologie
var select1 = document.getElementById('imunologie_ag_hbs_select').value;

var input33 = document.getElementById('imunologie_ag_hbs').value;

var select2 = document.getElementById('imunologie_anti_hcv_select').value;

var input34 = document.getElementById('imunologie_anti_hcv').value;

var select3 = document.getElementById('imunologie_anti_hiv_select').value;

var input35 = document.getElementById('imunologie_anti_hiv').value;


// Microbiologie
var select4 = document.getElementById('urocultura_mic').value;

var dyV = null;
var data = [];
var select_str  = null;

for(let sel = 1; sel != 5; ++sel){
    if(sel === 1){
        select_str = eval(`select${sel}`);
        if(select_str === "" || select_str === null){select_str = "-";}
        data.push({
            "imunologie_ag_hbs_select" : select_str
        });
    } else if(sel === 2) {
        select_str = eval(`select${sel}`);
        if(select_str === "" || select_str === null){select_str = "-";}
        data.push({
            "imunologie_anti_hcv_select" : select_str
        });
    } else if(sel === 3) {
        select_str = eval(`select${sel}`);
        if(select_str === "" || select_str === null){select_str = "-";}
        data.push({
            "imunologie_anti_hiv_select" : select_str
        });
    } else if(sel === 4) {
        select_str = eval(`select${sel}`);
        if(select_str === "" || select_str === null){select_str = "-";}
        data.push({
            "urocultura_mic" : select_str
        });
    }
}

for (let index = 1; index != 36; ++index) {
    if(index === 1){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_eritrocite" : dyV
    });
} else if(index === 2) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_hemoglobina" : dyV
    });
} else if(index === 3) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_hematocrit" : dyV
    });
} else if(index === 4){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_vem" : dyV
    });
} else if(index === 5){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_hem" : dyV
    });
} else if(index === 6){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_chem" : dyV
    });
} else if(index === 7){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_rdv_cv" : dyV
    });
} else if(index === 8){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_leucocite" : dyV
    });
} else if(index === 9){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_neutrofile" : dyV
    });
} else if(index === 10){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_neutrofile_suta" : dyV
    });
} else if(index === 11) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_eozinofile" : dyV
    });
} else if(index === 12){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_eozinofile_suta" : dyV
    });
} else if(index === 13){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_basofile" : dyV
    });
} else if(index === 14){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_basofile_suta" : dyV
    });
} else if(index === 15) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_limfocite" : dyV
    });
} else if(index === 16){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_limfocite_suta" : dyV
    });
} else if(index === 17){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_monocite" : dyV
    });
} else if(index === 18){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_monocite_suta" : dyV
    });
} else if(index === 19){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_trombocite" : dyV
    });
} else if(index === 20){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_vtm" : dyV
    });
} else if(index === 21){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_pct" : dyV
    });
} else if(index === 22){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hematologie_pdw" : dyV
    });
} else if(index === 23){
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hemostaza_timp" : dyV
    });
} else if(index === 24) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hemostaza_activitate" : dyV
    });
} else if(index === 25) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "hemostaza_inr" : dyV
    });
} else if(index === 26) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "biochimie_acid_uric" : dyV
    });
} else if(index === 27) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "biochimie_creatinina_serica" : dyV
    });
} else if(index === 28) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "biochimie_uree_serica" : dyV
    });
}  else if(index === 29) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "biochimie_glucoza_serica" : dyV
    });
}  else if(index === 30) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "biochimie_tgo_ast" : dyV
    });
} else if(index === 31) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "biochimie_tgp_alt" : dyV
    });
} else if(index === 32) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "biochimie_sideremie" : dyV
    });
} else if(index === 33) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "imunologie_ag_hbs" : dyV
    });
} else if(index === 34) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "imunologie_anti_hcv" : dyV
    });
} else if(index === 35) {
    dyV = eval(`input${index}`);
    if(dyV === "" || dyV === null){
        dyV = "-";
    }
    data.push({
        "imunologie_anti_hiv" : dyV
    });
} 
}


localStorage.setItem('session', JSON.stringify(data));
// console.log(JSON.stringify(data));
setTimeout(function(){window.location = 'results/index.html';}, 500);
}
);

document.getElementById('sub_feed').addEventListener('click', function(e){
    e.preventDefault();

    // MAIN
    var name = document.getElementById('feedback_input_name').value;
    var prename = document.getElementById('feedback_input_prename').value;
    var msg = document.getElementById('feedback_input_text').value;
    var stars = null;
    if(name === ""){
        swal({
            icon: 'error',
            title: 'Introduceti numele...'
          })
    } else if(prename === ""){
        swal({
            icon: 'error',
            title: 'Introduceti prenumele...'
          })
    } else if(msg === ""){
        swal({
            icon: 'error',
            title: 'Introduceti mesajul...'
          })
    } else if($('#rating-1').is(':checked')) {
        swal({
            icon: 'error',
            title: 'Alegeti ratingul...'
          })
    } else {
        var rootElement = document.documentElement;
        rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
        });
        if($('#rating-1').is(':checked') && !$('#rating-2').is(':checked')){
            stars = 1;
        } else if($('#rating-2').is(':checked') && !$('#rating-3').is(':checked')){
            stars = 2;
        } else if($('#rating-3').is(':checked') && !$('#rating-4').is(':checked')){
            stars = 3;
        } else if($('#rating-4').is(':checked') && !$('#rating-5').is(':checked')){
            stars = 4;
        } else if($('#rating-5').is(':checked')){
            stars = 5;
        }
        var today = new Date();
        var day = ""+today.getDate()+"";
        var month = ""+(today.getMonth()+1)+"";
        if(month.length === 1){
          month = "0"+(today.getMonth()+1)+"";
        } else {
          month = (today.getMonth()+1);
        }

        if(day.length === 1){
          day = "0"+today.getDate()+"";
        } else {
          day = ""+today.getDate()+"";
        }

        var hour = ""+today.getHours()+"";

        if(hour.length === 1){
          hour = "0"+today.getHours()+"";
        } else {
          hour = ""+today.getHours()+"";
        }

        var minutes = ""+today.getMinutes()+"";
        if(minutes.length === 1){
          minutes = "0"+today.getMinutes()+"";
        } else {
          minutes = ""+today.getMinutes()+"";
        }

        var sec = ""+today.getSeconds()+"";

        if(sec.length === 1){
          sec = "0"+today.getSeconds()+"";
        } else {
          sec = ""+today.getSeconds()+"";
        }

        var date = day+'-'+month+'-'+today.getFullYear()+"  "+hour+ ":" + minutes + ":" + sec;
        firebase.database().ref('feedback').child(date).set({
            nume: name,
            prenume: prename,
            mesaj: msg,
            ratign: stars
        }).then(function(){
            swal({
                icon: 'success',
                title: 'Multumesc pentru feedback ! :)',
                timer: 1500
              });
              setTimeout(function(){window.location = 'index.html';}, 1600);
        });
    }
})