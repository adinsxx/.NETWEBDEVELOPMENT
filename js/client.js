$(function(){
    // preload audio to broswer cache
    var toast = new Audio('media/toast.wav');


    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();

        $('#toast').toast({ autohide: false }).toast('show');
        
        


        });
    $('.code').on('keydown', function(e){
        if (e.keyCode === 27){
            $("#toast").toast({autohide: false}).toast('dispose');
        }
    });



});