export interface Config {
  nest: NestConfig;
  cors: CorsConfig;
  graphql: GraphqlConfig;
  security: SecurityConfig;
  appConfig: AppConfig;
}

export interface AppConfig {
  externalApiPath: string;
}

export interface NestConfig {
  port: number;
}

export interface CorsConfig {
  enabled: boolean;
}

export interface GraphqlConfig {
  playgroundEnabled: boolean;
  debug: boolean;
  schemaDestination: string;
  sortSchema: boolean;
}

export interface SecurityConfig {
  expiresIn: string;
  refreshIn: string;
  bcryptSaltOrRound: string | number;
}
