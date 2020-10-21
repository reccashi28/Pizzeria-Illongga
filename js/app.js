const $content = $('.data-content')


function showContent( type ) {
    $content.hide();
    $(type).show();
}

$('#main-nav-ul').on('click', '.nav-list', function(e) {
    // $(this).addClass('current').siblings().removeClass('current');
    showContent(e.currentTarget.hash);
    e.preventDefault();
});

showContent('#startseite');

$(document).on('click', '.nav-list', function(){
    $(this).addClass('current').parent().siblings('li').children('a').removeClass('current');
});


// var $content = $('.left-content')

// function showContent( type ) {
//     $('div', $content).hide();
//     $('div[data-menu-content='+type+']').show();
// }

// $('#main-nav-ul').on('click', '.nav-list', function(e) {
//     showContent(e.currentTarget.hash.slice(1));
//     e.preventDefault();
// });

// showContent('startseite');


// =============== fetching map =============

function initMap() {
    let konigsee = {lat: 47.596386, lng: 12.986747};
    let map = new google.maps.Map(document.getElementById('map-content'), { zoom: 10, center: konigsee}
);
let marker = new google.maps.Marker( { position: konigsee, map: map } );
}

// ========= active class =====

