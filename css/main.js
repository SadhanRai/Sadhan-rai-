  
 $(window).scroll(function () {

    if ($(this).scrollTOp()> 50) {
      $("navbar1").addclass("red")
    }

    else {
      $("navbar1").removeclass("red")
    }



  })