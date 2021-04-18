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
              setTimeout(function(){window.location = '../index.html';}, 1600);
        });
    }
});
let data = {};
data = JSON.parse(localStorage.getItem('session'));
console.log(data)
function fill(data, name, index, um, min, max) {
    document.getElementById(name).value = `${String(data[index][name])}`;
    if(document.getElementById(name).value === "-" || document.getElementById(name).value === ""){
        document.getElementById(name).value =  "-";
    } else {
        document.getElementById(name).value = `${String(data[index][name])}` + ' ' + um + '   ('+ min +' - ' + max + ' ' + um +')';
        if(parseFloat(data[index][name]) < min){
            $("#" + name).addClass('nu');
            $("#" + name).removeClass('ok');
            console.log('1')
        } else if(parseFloat(data[index][name]) >= max){
                $("#" + name).addClass('nu');
                $("#" + name).removeClass('ok');
                console.log('3')
            } else if(parseFloat(data[index][name]) >= min){
            $("#" + name).addClass('ok');
            $("#" + name).removeClass('nu');
            console.log('2')
        } else {
            $("#" + name).removeClass('ok');
            $("#" + name).removeClass('nu');
        }
    }    
} 

all = {
    'hematologie_eritrocite': [4, " *10^6/ul", 3.8, 5.1],
    'hematologie_hemoglobina': [5, " g/dL", 11.7, 15.5],
    'hematologie_hematocrit': [6, " %", 34, 45],
    'hematologie_vem': [7, " fL", 81, 100],
    'hematologie_hem': [8, " pg", 27, 34],
    'hematologie_chem': [9, " g/dL", 32, 36],
    'hematologie_rdv_cv': [10, " %", 11.5, 14.5],
    'hematologie_leucocite': [11, " *10^3/ul", 4.0, 11.0],
    'hematologie_neutrofile': [12, " *10^3/ul", 2.0, 8.0],
    'hematologie_neutrofile_suta': [13, " %", 45, 80],
    'hematologie_eozinofile': [14, " *10^3/ul", 0.0, 0.7],
    'hematologie_eozinofile_suta': [15, " %", 0, 7],
    'hematologie_basofile': [16, " *10^3/ul", 0.0, 0.2],
    'hematologie_basofile_suta': [17, " %", 0, 2],
    'hematologie_limfocite': [18, " *10^3/ul", 1.0, 4.0],
    'hematologie_limfocite_suta': [19, " %", 20, 55],
    'hematologie_monocite': [20, " *10^3/ul", 0.0, 1.0],
    'hematologie_monocite_suta': [21, " %", 0, 15],
    'hematologie_trombocite': [22, " *10^3/ul", 150, 450],
    'hematologie_vtm': [23, " fL", 7.4, 10.4],
    'hematologie_pct': [24, " %", 0.16, 0.48],
    'hematologie_pdw': [25, " fL", 12, 16.5],
    'hemostaza_timp': [26, " s", 9.1, 12.1],
    'hemostaza_activitate': [27, " %", 72, 144],
    'hemostaza_inr': [28, " ", 0.81, 1.20],
    'biochimie_acid_uric': [29, " mg/dL", 2.6, 6],
    'biochimie_creatinina_serica': [30, " mg/dl", 0, 1.10],
    'biochimie_uree_serica': [31, " md/dl", 0, 40],
    'biochimie_glucoza_serica': [32, " mg/dL", 60, 105],
    'biochimie_tgo_ast': [33, " U/L", 0, 34],
    'biochimie_tgp_alt': [34, " U/L", 0, 55],
    'biochimie_sideremie': [35, " ug/dl", 37, 170],
    'imunologie_ag_hbs': [36, " S/CO", 0, 1.0],
    'imunologie_anti_hcv': [37, " S/CO", 0, 1.0],
    'imunologie_anti_hiv': [38, " S/CO", 0, 1.0]
}

for (var field in all) {
    if (all.hasOwnProperty(field)) {           
        console.log(all[field])
        fill(data, field, all[field][0], all[field][1], all[field][2], all[field][3]);
    }
}

var sel_option = ``;
if(data[0].imunologie_ag_hbs_select === "Nonreactiv"){
    document.getElementById('no1').selected = true;
    $("#imunologie_ag_hbs_select").removeClass("nu");
    $("#imunologie_ag_hbs_select").addClass("ok");
} else if(data[0].imunologie_ag_hbs_select === "Reactiv"){
    document.getElementById('no2').selected = true;
    $("#imunologie_ag_hbs_select").addClass("nu");
    $("#imunologie_ag_hbs_select").removeClass("ok");
} else {
    sel_option = `<option id="__no1" value="">-</option>`;
    $("#imunologie_ag_hbs_select").append(sel_option);
    document.getElementById('__no1').selected = true;
    $("#imunologie_ag_hbs_select").removeClass("nu");
    $("#imunologie_ag_hbs_select").removeClass("ok");
}


if(data[1].imunologie_anti_hcv_select === "Nonreactiv"){
    document.getElementById('no3').selected = true;
    $("#imunologie_anti_hcv_select").removeClass("nu");
    $("#imunologie_anti_hcv_select").addClass("ok");
} else if(data[1].imunologie_ag_hbs_select === "Reactiv"){
    document.getElementById('no4').selected = true;
    $("#imunologie_anti_hcv_select").addClass("nu");
    $("#imunologie_anti_hcv_select").removeClass("ok");
} else {
    sel_option = `<option id="__no2" value="">-</option>`;
    $("#imunologie_anti_hcv_select").append(sel_option);
    document.getElementById('__no2').selected = true;
    $("#imunologie_anti_hcv_select").removeClass("nu");
    $("#imunologie_anti_hcv_select").removeClass("ok");
}


if(data[2].imunologie_anti_hiv_select === "Nonreactiv"){
    document.getElementById('no5').selected = true;
    $("#imunologie_anti_hiv_select").removeClass("nu");
    $("#imunologie_anti_hiv_select").addClass("ok");
} else if(data[2].imunologie_ag_hbs_select === "Reactiv"){
    document.getElementById('no6').selected = true;
    $("#imunologie_anti_hiv_select").addClass("nu");
    $("#imunologie_anti_hiv_select").removeClass("ok");
} else {
    sel_option = `<option id="__no3" value="">-</option>`;
    $("#imunologie_anti_hiv_select").append(sel_option);
    document.getElementById('__no3').selected = true;
    $("#imunologie_anti_hiv_select").removeClass("nu");
    $("#imunologie_anti_hiv_select").removeClass("ok");
}

if(data[3].urocultura_mic === "mic"){
    document.getElementById('no7').selected = true;
    $("#urocultura_mic").removeClass("nu");
    $("#urocultura_mic").addClass("ok");
} else if(data[3].imunologie_ag_hbs_select === "mare"){
    document.getElementById('no8').selected = true;
    $("#urocultura_mic").addClass("nu");
    $("#urocultura_mic").removeClass("ok");
} else {
    sel_option = `<option id="__no4" value="">-</option>`;
    $("#urocultura_mic").append(sel_option);
    document.getElementById('__no4').selected = true;
    $("#urocultura_mic").removeClass("nu");
    $("#urocultura_mic").removeClass("ok");
}