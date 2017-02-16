function loadPage(url) {
  console.log('hi');
  var iframe = $('.content iframe');
  iframe.show();
  iframe.attr('src', url);
}





function search() {

  var text = $(".search").val();

  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='+text+'&callback=JSON_CALLBACK',
    /*data: {
      action: 'query',
      list: 'search',
      srsearch: text,
      gsrsearch: text,
      utf8: '',
      format: 'json',
      prop: [
        'pageimages',
        'extracts'
      ].join('|'),
      exintro: true,
      explaintext: true,
      generator: 'search',
      gsrnamespace: 0,
      gsrlimit: 10,
      pilimit: 'max',
      exsentences: 1
    },*/
    headers: {
      'Api-User-Agent': 'personal wiki viewer /; sarahpierce410@gmail.com'
    },

    type: 'get',
    dataType: 'jsonp',
    jsonp: 'callback'

  }).done(data => {
    document.getElementById('main').innerHTML = '<iframe src="" style="display:none;"></iframe>';
    var pages = data.query.pages;


    for(var res in pages){

      document.getElementById('main').innerHTML += '<div class="results" onclick=\'loadPage("https://en.wikipedia.org/?curid='+res+'")\'><span class="title">'+pages[res].title+"</span>: "+ pages[res].extract + '</div><br>';

    }

    console.log(pages);
  });



}

$(document).ready(function() {

  $("#searchForm").submit(function() {
      search();
      return false;
  });

});
