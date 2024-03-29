import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3000,
  },
  appConfig: {
    externalApiPath:"https://dev-webhook.foxland.io/admin"
  },
  
  cors: {
    enabled: true,
  },


  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '7d',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
};

export default (): Config => config;
