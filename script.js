$('#table_id').dataTable( {
    "columns": [
        {"width" : "23%"},
        {"width" : "26%"},
        {"width" : "12.5%"},
        {"width" : "26%"},
        {"width" : "12.5%"}
    ]
});

$(document).ready( function () {
	var table = $('#table_id').DataTable();
    new $.fn.dataTable.FixedHeader( table );
} );