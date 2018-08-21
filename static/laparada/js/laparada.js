
$( function() {
    function page_js() {
      $("#map_contact").css("visibility", "hidden");
      $("a.popup").prettyPhoto();
      $("a[rel^='prettyPhoto']").prettyPhoto();
      var $on_icon='icon-minus-sign';
      var $off_icon='icon-plus-sign';
      $('.accordion-toggle').on('click', function(e) {
        var $element = $(this).find("i");
        
        $(".itoggle i").removeClass($on_icon);
        $(".itoggle i").addClass($off_icon);
        $element.removeClass($off_icon);
        $element.addClass($on_icon);
        return true;
      });
    }


    $('a.pjax').pjax('#main');
    /*$.pjax({
      url: '/es/menu',
      container: '#central'
    });
    */
    $('#main').on('pjax:start', function() {
        $('.loader').show();
        $('.close').hide();
    }).on('pjax:end',   function() {
        $('.loader').hide();
        $('.close').show();
        page_js();
    });
    $('.close').click(function(){
        $('#central').animate({left: '-840px'}, 1000);
        //alert("ho");
    });
    $('a.pjax').click(function(){
        $('#central').animate( {left: '0px'}, 1000);
        $("li.active").removeClass("active");
        $(this).parent().addClass("active");
        //alert("ho");
    });


});
