$(document).ready(function(){
    
    $("form input").keydown(function(){
        $(this).removeClass('error');    
    })
    $("form select").change(function(){
        $(this).removeClass('error');    
    })
    
    $("form").submit(function(e){
        e.preventDefault();
        var err = 0;
        $(".required").each(function(){
            if( $(this).val() == "" ){
                $(this).addClass('error');
                err++;
            }
        })
        if( err == 0 ){
            // $("form")[0].submit();  // Enviar a procesar al PHP
            $("form > *").fadeOut(500);        
            $("form").html("<h2 class='gracias'>Gracias! Sus datos fueron enviados</h2>");
            $("h2.gracias").fadeIn(500);            
        } else {
            $("p.msg").fadeIn(300);
        }
    })
})

