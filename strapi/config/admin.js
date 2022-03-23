module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1d884ea3cc6a7f51beda6dbfecbcdd61'),
  },
});
