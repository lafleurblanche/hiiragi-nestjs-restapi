import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

/* config */
import { configuration } from 'src/config/configuration';
import { validateEnv } from 'src/config/validate-env';

/* const */
import { DBConnectVal } from 'src/const/dbconnval';
import { HiiragiRW01Model } from './models/hiiragi/hiiragi-rw01.model';
import { HiiragiRW01Module } from './modules/hiiragi-rw01.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DBConnectVal.DATABASE_HOST,
      port: 5432,
      username: DBConnectVal.DATABASE_USERNAME,
      password: DBConnectVal.DATABASE_PASSWORD,
      database: DBConnectVal.DATABASE_NAME,
      entities: [
        HiiragiRW01Model,
      ],
      synchronize: false,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configuration],
      validate: validateEnv,
    }),
    HiiragiRW01Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
