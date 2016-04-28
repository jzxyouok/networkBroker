(function($){
	$().ready(function(){
    /*$(".add>a:first-child").on("click",function(e){
      $(".addPartner").slideToggle("fast");
      e.stopPropagation();
      return false;
    });
    $(".add>a:first-child").on("click",".partnerForm",function(e){
      e.stopPropagation();
    });
    $(".partnerForm").on("click",".cancel",function(){
      $(".addPartner").slideUp("fast");
    });
    $(document).mouseup(function(e){
      var _con = $(".addPartner");   // 设置目标区域
      if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
        $(".addPartner").slideUp("fast");
      }
    });*/

    $(".add>a:first-child").on('click',function(e){

      if($(this).siblings('.addPartner').length){
        if($(this).siblings('.addPartner').is(":hidden")){
          $(this).siblings('.addPartner').show();
        }else{
          $(this).siblings('.addPartner').hide();
        }
        e.stopPropagation();
        return false;
      }
      
    })

    $('.addPartner').on('click',function(e){
      e.stopPropagation();
    })
    $(".partnerForm").on("click",".cancel",function(){
      if($('.addPartner').is(":hidden")){
        $('.addPartner').show();
      }else{
        $('.addPartner').hide();
      }
    });

    $('.rightCon').on('click',function(e){
      if($('.addPartner').length){
        $('.addPartner').hide();
      }
      
    })


	})

})(jQuery);

