exports.router=function(app){

  app.route('/')
    .get(function(req, res, next) {
      res.render('welcome/welcome'); // controller안거치고 바로 뷰를 보이라는거
    })

    .post(function(req, res, next){

    });

    app.route('/landing')
      .get(function(req, res, next) {
        res.render('welcome/welcome'); // controller안거치고 바로 뷰를 보이라는거
      })

      .post(function(req, res, next){

      });

};
