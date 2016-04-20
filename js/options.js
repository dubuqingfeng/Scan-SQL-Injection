$(document).ready(function() {

    Settings.load(function (settings) {
        console.log(settings)
        // document.getElementById('adminid').value = settings;
        $('#adminid').val(settings);
        $('#adminid').trigger('autoresize');
    });

    Materialize.toast('Started', 1000);

});