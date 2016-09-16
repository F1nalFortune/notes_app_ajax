$(document).on('click', '.remove-note', function() {
 var url = '/notes/' + $(this).data('id');
 $.ajax({
   url: url,
   type: 'DELETE',
   dataType: 'JSON'
 }).done( function(data) {
   getAllNotes();
 }).fail( function(msg) {
   console.log(msg);
 });
});
