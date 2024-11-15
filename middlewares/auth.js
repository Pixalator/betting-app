function authMiddleware(req, res, next) {
    // Check if the user is authenticated
    // For simplicity, using `req.session` to store user data (if using sessions)
    // Alternatively, use JWT or other mechanisms for token-based authentication
  
    if (req.session && req.session.user) {
      // User is authenticated, proceed to the next middleware or route handler
      return next();
    }
  
    // If not authenticated, redirect to login page
    return res.redirect('/login_register');
  }

  
  module.exports={authMiddleware}