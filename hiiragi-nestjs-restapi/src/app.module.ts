import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

/* const */
import { DBConnectVal } from 'src/const/dbconnval';
import { HiiragiRW01Model } from './models/hiiragi/hiiragi-rw01.model';
import { HiiragiRW02Model } from './models/hiiragi/hiiragi-rw02.model';
import { HiiragiRW01Module } from './modules/hiiragi-rw01.module';
import { HiiragiRW02Module } from './modules/hiiragi-rw02.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DBConnectVal.DATABASE_HOST,
      port: DBConnectVal.DATABASE_PORT,
      username: DBConnectVal.DATABASE_USERNAME,
      password: DBConnectVal.DATABASE_PASSWORD,
      database: DBConnectVal.DATABASE_NAME,
      entities: [
        HiiragiRW01Model,
        HiiragiRW02Model,
      ],
      synchronize: false,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [],
    }),
    HiiragiRW01Module,
    HiiragiRW02Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
