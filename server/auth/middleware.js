function ensureLoggedIn(req, res, next) {
  if(req.signedCookies.user_id) {
    next();
  } else {
    res.status(401).json({message: 'Un-Authorized'});
    next(new Error('Un-Authorized'));
  }
} 
function allowAccess(req, res, next) {
  console.log(req.params.id)
  console.log(req.signedCookies.user_id)
  if(req.signedCookies.user_id == req.params.id) {
    next();
  } else {
    res.status(401).json({message: 'Un-Authorized'});
    next(new Error('Un-Authorized'));
  }
} 

module.exports = {
  ensureLoggedIn,
  allowAccess
}