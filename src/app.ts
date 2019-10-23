import GAW from 'lib/GAW';

declare var GAWapp: any;

var GAWapp;

function doGet(e) {
  GAWapp = new GAW({
    title: 'GAW',
    page: '',
  });

  GAWapp.page = e.parameter.page ? e.parameter.page : "index";

  var t = GAWapp.asset('template', 'view/common/layout.html');

  t.page = GAWapp.page;
  t.title = GAWapp.title;

  return t.evaluate();
}

function doPost(e){
}


