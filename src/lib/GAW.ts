declare var HtmlService: any;

export default class GAW {

  constructor(){
    console.log("GAW!!!");
  }

  asset(tp, path){
    return HtmlService[
      // Template, HtmlOutput
      'create' + tp[0].toUpperCase() + tp.slice(1) + 'FromFile'
    ]('asset/' + path);
  }

  include(dir, name, param){
    try{
      var t = this.asset('template', 'view/' + dir + '/' + name + ".html");
      for(var k in param || {}){
        t[k] = param[k];
      }
      return t.evaluate().getContent();
    }catch(e){
      var t = this.asset('template', 'view/common/error.html');
      t.error = e;
      return t.evaluate().getContent();
    }
  }

  load_component(name){
    try{
      var s = this.asset('template', 'view/component/' + name + "/vue.js.html");
      var t = this.asset('template', 'view/component/' + name + "/template.html");
      return ( ""
        + '<script type="text/template" id="template--component-view-' + name + '">'
        + t.evaluate().getContent()
        + '</script>'
        + s.evaluate().getContent()
      );
    }catch(e){
      return "Error: " + e.message;
    }

  }

}
