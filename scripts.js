/* validação de campos js */
function validar() {
    var pass = forms.pass.value;
    var pass_rep = forms.pass_rep.value;

    if (pass != ""){
    if (pass.length <=5){
        Swal.fire(
            'Oops!',
            'Sua senha deve ter no mínimo 6 caracteres.',
            'error'
          );
        return false;
    }
    }
    if (pass != pass_rep) {
        Swal.fire(
            'Oops!',
            'Senhas não conferem!',
            'error'
          );
        return false;
    }
}

/* pop-up termos jQuery */
$(function(){
    $('.termos').hide();

    $('#termos').click(function(){
    $('.termos').show();
    $('.termos').css({"display":"block"})
    });

    $('.close').click(function(){
    $('.termos').hide();
    });
});