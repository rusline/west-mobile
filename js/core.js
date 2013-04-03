$(document).ready(function(){
	
	$('input:text').each(function(){
        var txtval = $(this).val();
        $(this).focus(function(){
					$(this).css({'color':'#000'});
            if($(this).val() == txtval){
                $(this).val('')
            }
        });
        $(this).blur(function(){
						$(this).css({'color':'#a5a5a5'});
            if($(this).val() == ""){
                $(this).val(txtval);
            }
        });
    });
		
		
    $("#passwordEnterToSite").prev().text('ПАРОЛЬ');
		/*  тут привязано одно событие на получение фокуса полю в форме  */
		$(".login-in02 input, .pass1 input").focus(function(e){
	    var clicked = $(e.target),
	    clickedId = clicked.attr("id");
		/* если поле пароль получило фокус, удаляем текст в label для пароль  */
    if(clickedId=="passwordEnterToSite"){
     clicked.prev().text('');
     }
		});
	 
		/* 	тут привязано одно событие на потерю фокуса полем в форме */
		$(".login-in02 input, .pass1 input").blur(function(e){
	    var clicked = $(e.target),
	    clickedId = clicked.attr("id");
	    /* если ушли из поля пароль и его значение пусто, добавляем текст в label для пароль  */
		 if(clickedId=="passwordEnterToSite"){
        if(clicked.val()=='') clicked.prev().text('ПАРОЛЬ');
    }
		});
	
	
    $("#passwordEnterToSite2").prev().text('ПОДТВЕРЖДЕНИЕ ПАРОЛЯ');
		/*  тут привязано одно событие на получение фокуса полю в форме  */
		$(".pass2 input").focus(function(e){
	    var clicked = $(e.target),
	    clickedId = clicked.attr("id");
	  /* если поле пароль получило фокус, удаляем текст в label для пароль  */
    if(clickedId=="passwordEnterToSite2"){
     clicked.prev().text('');
     }
		});
	 
		/* 	тут привязано одно событие на потерю фокуса полем в форме */
		$(".pass2 input").blur(function(e){
	    var clicked = $(e.target),
	    clickedId = clicked.attr("id");
	    /* если ушли из поля пароль и его значение пусто, добавляем текст в label для пароль  */
		 if(clickedId=="passwordEnterToSite2"){
        if(clicked.val()=='') clicked.prev().text('ПОДТВЕРЖДЕНИЕ ПАРОЛЯ');
    }
		});
	
		
	$(".radioclass").click(function(){
		 if($(this).is(":checked")){
			$(".radioselected:not(:checked)").removeClass("radioselected");
			$(this).next("label").addClass("radioselected");
	  }
	});
	
	$(".checkboxclass").click(function(){
        if($(this).is(":checked")){
            $(this).next("label").addClass("labelselected");
        }else{
            $(this).next("label").removeClass("labelselected");
        }
   });
	 
	 
	 $('.rules-box').css({'display':'block', 'z-index': '10'});
			jQuery('.scroll-pane').jScrollPane({autoReinitialise: true});
			e.preventDefault();
	
	$('.close-rules').click(function(e){
		$('.rules-box').css({'display':'none', 'z-index': '-1'});
		e.preventDefault();
	});

	

})


