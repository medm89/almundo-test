$( document ).ready(function() {
  $('.tree-toggle').click(function () {
    $(this).parent().children('ul.tree').toggle(200);
    var x=$(this).children('span.glyphicon-chevron-down');
    x.toggleClass('vuelta');
  });
  $(function(){
    $('.tree-toggle').parent().children('ul.tree').toggle(200);
    var x=$(this).children('span.glyphicon-chevron-down');
  })
});




