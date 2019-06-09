$(document).ready(function(){
    $("a").on('click', function(e) {        
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            
            if($(window).width() >= 769){
                $("html, body").animate({
                    scrollTop: $(hash).offset().top -80
                }, 800);
            }else {
                $('.navbar-collapse').collapse('hide');      
                setTimeout(function() {
                    $("html, body").animate({
                        scrollTop: $(hash).offset().top
                    }, 800);      
                },400);
            }
        }
    });

    var name = 'leonardoboni1993';
    var at = '@';
    var domain = 'gmail.com';
    var s = name + at + domain;
    var e = s.split("").reverse().join("");
    $('#email').html(e);


    var number = '+39 334 1852100';
    var s = number;
    var e = s.split("").reverse().join("");
    $('#cellulare1, #cellulare2').html(e);



    $('#privacy_ceck').change(function(){        
        if($(this).is(":checked")) {
            var currentdate = new Date(); 
            var datetime = "Autorizzo al trattamento dei dati il " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " alle ore "  
                + currentdate.getHours() + " e "  
                + currentdate.getMinutes() + " minuti.";
            $('#submit').removeAttr('disabled');
            $(this).attr('value', datetime);
        } else {
            $('#submit').attr('disabled', ""); 
            $(this).attr('value', 'Non autorizzo al trattamento dei dati');           
        }
    });


    $("#form").submit(function(e) {
        e.preventDefault();
    
        var $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function() {
        alert("Messaggio inviato!");
        $('#form').trigger("reset");
        });
    });




    $("#banner").fadeIn();

    $("#banner-button").on("click", function(){
        scriviCookie('accetta', 'true', 365);
        $('#banner').addClass("d-none");
    });

    var accetta = leggiCookie('accetta');
    if(accetta != "true") {
        $('#banner').removeClass("d-none");
    }

    function scriviCookie(nomeCookie,valoreCookie,durataCookie) {
        var scadenza = new Date();
        var adesso = new Date();
        scadenza.setTime(adesso.getTime() + (parseInt(durataCookie) * 86400));
        document.cookie = nomeCookie + '=' + escape(valoreCookie) + '; expires=' + scadenza.toGMTString() + '; path=/';
    }

    function leggiCookie(nomeCookie) {
        if (document.cookie.length > 0) {
            var inizio = document.cookie.indexOf(nomeCookie + "=");
            if (inizio != -1) {
                inizio = inizio + nomeCookie.length + 1;
                var fine = document.cookie.indexOf(";",inizio);
                if (fine == -1) fine = document.cookie.length;
                return unescape(document.cookie.substring(inizio,fine));
            } else {
                return "";
            }
        }
        return "";
    }

});