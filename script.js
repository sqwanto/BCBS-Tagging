$('#table_id').dataTable( {
    "columns": [
        {"width" : "21%"},
        {"width" : "27.5%"},
        {"width" : "12%"},
        {"width" : "27.5%"},
        {"width" : "12%"}
    ]
});

$(document).ready( function () {
	var table = $('#table_id').DataTable();
    new $.fn.dataTable.FixedHeader( table );
} );

