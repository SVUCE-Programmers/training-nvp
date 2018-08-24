module.exports.authenticated = function authenticated(req, res, next){
	req.session.isAuthenticated = req.session.isAuthenticated ? true : false;
	res.locals.isAuthenticated = req.session.isAuthenticated;
	if (req.session.isAuthenticated) {
		res.locals.user = req.session.user;
	}
	next();
};
 
module.exports.requireAuthentication = function requireAuthentication(req, res, next){
	if (req.session.isAuthenticated) {
		next();
	}else {  
        req.session.oldUrl = req.url;
        req.session.oldData = req.body;
        res.redirect('/login');
	}
};