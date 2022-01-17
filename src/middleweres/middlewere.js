
exports.middlewereGlobal = (req, res, next)=>{
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.outroMiddlewere = (req, res, next) =>{
    console.log('Sou outro Middlewere');
    next();
};

exports.checkCsrfError = (err, req, res, next) =>{
    if(err){
        return res.render('404'); 
    }
    next();
}

exports.csrfMiddlewere = (req, res, next)=>{
    res.locals.csrfToken = req.csrfToken();
    next();
}


exports.loginRequired = (req, res, next)=>{
    if(!req.session.user){
        req.flash('errors', 'Voce precisa fazer login.');
        req.session.save( ()=> res.redirect('/'));
        return;
    }
    next();
}