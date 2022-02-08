module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '559c4f2fb28ab4d9db83052e8cc2c7e2'),
  },
});
