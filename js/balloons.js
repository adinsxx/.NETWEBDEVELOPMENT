$(function(){
    var randomArray = ['animate__flash', 
    'animate__pulse', 
    'animate__rubberBand', 
    'animate__shakeX', 
    'animate__shakeY', 
    'animate__headShake', 
    'animate__swing', 
    'animate__tada', 
    'animate__wobble', 
    'animate__jello', 
    'animate__heartBeat'];
    var randomSeekers = randomArray[Math.floor(Math.random()*randomArray.length)];

    $('#greeting').addClass(randomSeekers);
    $('#birthday').pickadate();
    $('#birthday').pickadate({ format: 'mmmm, d' });
    
    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');

    });

    //Event listener for check/uncheck all
    $('#checkAll').change(function(){
        var checked = $(this).is(':checked');
        if(checked){
            $('.form-check-input').each(function(){
                $(this).prop('checked', true);
            });
        } else {
            $('.form-check-input').each(function(){
                $(this).prop('checked', true);
            });
        }
    });

    //event listener to show toast
    $('#submit').on('click', function(e) {
        console.log('cleck');
        let isChecked = false
        $('.form-check-input').each(function () {
           // $(this).prop('checked', false);
           if ($(this).prop('checked')) {
               isChecked = true;
           }
        });
        if (!isChecked) {
            $('#toast').toast('show');
        }

        
    });

    //clears toast on esc key keydown
    $('#submit').on('keydown', function(e){
        if (e.keyCode === 27){
            $("#toast").toast({autohide: false}).toast('dispose');
        }
    });

 
});