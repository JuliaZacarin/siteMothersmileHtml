$(document).ready(function() {
      $('#ok').click(function() {
        $('.toast-body').html('Seu e-mail é ' + 
          $('#email').val());
        $('.toast').toast('show');
    });  
});

$(document).ready(function() {
 $('#ok-nome').click(function() {
        $('.toast-body2').html('Seu nome é ' + 
          $('#nome').val());
        $('.toast').toast('show'); 
    });  
});

$(document).ready(function() {
 $('#ok-endereco').click(function() {
        $('.toast-body3').html('Seu endereço é ' + 
          $('#endereco').val());
        $('.toast').toast('show'); 
    });  
});