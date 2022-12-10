import { EnvironmentVariables } from 'src/config/validate-env';

export interface Configuration {
  env: 'test' | 'development' | 'production';
  nest: {
    port: number;
  };
  cookie: {
    secret: string;
    secure: boolean;
  };
}

export function configuration(): Configuration {
  const env = process.env as unknown as EnvironmentVariables;

  return {
    env: env.NODE_ENV,
    nest: {
      port: parseInt(env.PORT ?? '', 10) || 3001,
    },
    cookie: {
      secret: env.COOKIE_SECRET,
      secure: (env.COOKIE_SECURE ?? 'false') === 'true',
    },
  };
}
