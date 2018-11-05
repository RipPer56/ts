import * as admin from 'firebase-admin';

export const isAuthenticated = (req, res, next) => {
  let idToken = "";
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer '))
      idToken=req.headers.authorization.split('Bearer ')[1];
    admin.auth().verifyIdToken(idToken).then((decodedIdToken: admin.auth.DecodedIdToken) => {
      req.user = decodedIdToken;
      return next();
  }).catch((error) => {
    res.status(401).json({error: true, authenticated: false, statusCode: 401});
  });
};
