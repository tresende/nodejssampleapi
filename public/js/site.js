const URL = 'api/item';
sendRequests = function () {
    if (!$('#number').val())
        return false;

    for (var i = 0; i < $('#number').val(); i++) {
        var item = {
            event: 'Evento: ' + new Date().getUTCMilliseconds(),
        }
        $.post(URL, item);
    }
}

$('#search').select2({
    width: '100%',
    delay: 100,
    minimumInputLength: 2,
    ajax: {
        url: URL,
        processResults: function (data, params) {
            return {
                results: $.map(data, function (item) {
                    return {
                        text: item.event,
                        id: item.id,
                    }
                })
            }
        }
    },
});