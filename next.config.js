const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'skabaza46',
        mongodb_password: 'V2KAqQkepVrBgAhA',
        mongodb_clustername: 'cluster0.xf2g1pw',
        mongodb_database: 'nextjs-blog-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'skabaza46',
      mongodb_password: 'V2KAqQkepVrBgAhA',
      mongodb_clustername: 'cluster0.xf2g1pw',
      mongodb_database: 'nextjs-blog-site-prod',
    },
  };
};
