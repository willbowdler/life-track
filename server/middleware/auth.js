const isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    // NOTE maybe make sure that the userId matches the user corrsponding to some other data to?
    return next()
  } else {
    return res.status(401).send('Unauthorized')
  }
}

module.exports = { isAuthenticated }
