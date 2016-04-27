(function($){
	$().ready(function(){
    var winScreen=window.screen.width;
    if(winScreen>=640){
      winScreen=320;
    }
    $('html').css('font-size',winScreen/10+'px');
    
		//userMore
		$('.userMore').on('click',function(event){
			$(this).find('.navUser').stop(true,true).animate({
				'right':0
			});
			 event.stopPropagation();
		})
		$(document).on('click',function(){
			$('.navUser').stop(true,true).animate({
				'right':'-300px'
			});
		})

    //资金结算-账单明细 表格切换
    $('.toggleTit span a').on('click',function(){
      var _thisIndex=$(this).parent('span').index()-1;
      $(this).parents('.toggleTit').siblings('.accountTog').addClass('boxhide');
      $(this).parents('.toggleTit').siblings('.accountTog').eq(_thisIndex).removeClass('boxhide');
      
      $('.toggleTit span a').removeClass('active');
      $(this).addClass('active');
    })


	})

})(jQuery);



//邮箱验证
function emailModify(obj){
  //不正确
  console.log($(obj).val());
  if(!$(obj).val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){
  	if($(obj).next('.alert ').length==0){
  		$(obj).after('<div class="alert alert-danger alert-dismissible" role="alert">请输入正确的邮箱地址！</div>');
  		$(obj).css('border-color','#ed5565');
  		return true;
  	}
  }else{
  	$(obj).next().remove();
  	$(obj).css('border-color','#18a689');
  	return false;
  }
}

//qq验证
function qqModify(obj){
  //不正确
  if(!$(obj).val().match(/^[1-9][0-9]{4,}$/)){
  	if($(obj).next('.alert ').length==0){
  		$(obj).after('<div class="alert alert-danger alert-dismissible" role="alert">请输入正确的qq号码！</div>');
  		$(obj).css('border-color','#ed5565');
  		return true;
  	}
  }else{
  	$(obj).next().remove();
  	$(obj).css('border-color','#18a689');
  	return false;
  }
}


//验证手机号码或者电话号码  
function checkContactNumber(obj) {  
    var mobile = $.trim($(obj).val());  
    var isMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;  
    var isPhone = /^(?:(?:0\d{2,3})-)?(?:\d{7,8})(-(?:\d{3,}))?$/;;  
    var error = "<label id=\"error\" class=\"validate_input_error\">请正确填写电话号码，例如:13511111111或010-11111111</label>";  
    //如果为1开头则验证手机号码  
    if (mobile.substring(0, 1) == 1) {  
        if (!isMobile.exec(mobile) && mobile.length != 11) {  
        	if($(obj).next('.alert ').length==0){
                $(obj).after('<div class="alert alert-danger alert-dismissible" role="alert">请输入正确的电话号码！</div>');
                return false;  
        	}
        }else{
        	$(obj).next().remove();
        }
    }  
    //如果为0开头则验证固定电话号码  
    else if (mobile.substring(0, 1) == 0) {  
        if (!isPhone.test(mobile)) {  
        	if($(obj).next('.alert ').length==0){
                $(obj).after('<div class="alert alert-danger alert-dismissible" role="alert">请输入正确的电话号码！</div>');
                return false;  
            }
        }else{
            $(obj).next().remove();
          }  
    }  
    //否则全部不通过  
    else {  
        if($(obj).next('.alert ').length==0){
            $(obj).after('<div class="alert alert-danger alert-dismissible" role="alert">请输入正确的电话号码！</div>');
            return false;  
        }
    }  
    return true;  
} 

//操作成功信息
var alertTimer=null;
function successAlert(){
	clearTimeout(alertTimer);
	if($('.alertBox').length==0){
	$('body').append('<div class="alert alertBox alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>操作成功！</div>');
	}

	alertTimer=setTimeout(function(){
		$('.alertBox').remove();
	},2000)
}

//新增银行卡
function addCards(obj){
  $(obj).parents('h2').siblings('ul').stop(true,true).slideToggle();
  //console.log('a');
}