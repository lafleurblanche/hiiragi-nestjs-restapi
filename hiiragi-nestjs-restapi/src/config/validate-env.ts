import { plainToClass } from 'class-transformer';
import {
  IsBooleanString,
  IsNumberString,
  IsOptional,
  IsString,
  IsIn,
  validateSync,
} from 'class-validator';

type BooleanString = 'true' | 'false';

const NODE_ENV_VALUES = ['development', 'production', 'test'] as const;

type NodeEnvType = typeof NODE_ENV_VALUES[number];

export class EnvironmentVariables {
  @IsIn(NODE_ENV_VALUES)
  NODE_ENV: NodeEnvType = 'development';

  @IsNumberString()
  @IsOptional()
  PORT?: string;

  @IsString()
  COOKIE_SECRET!: string;

  @IsBooleanString()
  @IsOptional()
  COOKIE_SECURE?: BooleanString;
}

export function validateEnv(
  config: Record<string, unknown>
): EnvironmentVariables {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
