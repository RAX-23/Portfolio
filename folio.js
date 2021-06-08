
var posY = 0;
var jarak = 30;

function smoothScroll(id) {
    var target = document.getElementById(id).offsetTop;
    var scrollAnimate = setTimeout(function () {
        smoothScroll(id)
    }, 5);
    posY = posY + jarak;
    if (posY >= target) {
        clearTimeout(scrollAnimate);
        posY = 0;
    } else {
        window.scroll(0, posY);
    }

    return false;
}









function validasi(form) {
    var lolos = true;

    var errorText = '';


    for (i = 0; i < 3; i++) {
        if (form[i].value.trim().length <= 0) {


            switch (i) {
                case 0: errorText = 'Nama '; break;
                case 1: errorText = 'Email '; break;
                case 2: errorText = 'Pesan '; break;

                default:
                    break;
            }




            if (form[i].nextElementSibling.className != 'error') {
                form[i].style.borderColor = 'red';
                form[i].insertAdjacentHTML('afterend', "<div class='error'>" + errorText + "tidak boleh kosong </div>");
            }
            lolos = false;
        } else {
            if (form[i].nextElementSibling.className == 'error') {
                form[i].style.borderColor = '#0074b9';
                form[i].nextElementSibling.remove();
            }

        }
    }

    return lolos;
}

var target_gambar = document.getElementById('target_gambar');
var array_gambar = document.getElementById('karya_lain').children;
var nomor_sekarang = 0;


function ganti_gambar(gambar) {
    target_gambar.src = gambar.getAttribute('src');
    nomor_sekarang.sekarang = gambar.className;
}

function ganti_sebelum() {
    nomor_sekarang = nomor_sekarang - 1;
    if (nomor_sekarang < 0) nomor_sekarang = 2;

    target_gambar.src = array_gambar[nomor_sekarang].getAttribute("src");
}

function ganti_berikut() {
    nomor_sekarang = nomor_sekarang + 1;
    if (nomor_sekarang > 2) nomor_sekarang = 0;

    target_gambar.src = array_gambar[nomor_sekarang].getAttribute("src");
}