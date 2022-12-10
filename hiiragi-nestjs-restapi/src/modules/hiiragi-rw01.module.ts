/* NestJS(common) */
import { Module } from "@nestjs/common";

/* NestJS(typeorm) */
import { TypeOrmModule } from "@nestjs/typeorm";

/* controller */
import { HiiragiRW01Controller } from "src/controller/hiiragi/hiiragi-rw01.controller";

/* models */
import { HiiragiRW01Model } from "src/models/hiiragi/hiiragi-rw01.model";

/* services */
import { HiiragiRW01Service } from "src/services/hiiragi/hiiragi-rw01.service";

@Module({
  imports: [TypeOrmModule.forFeature([HiiragiRW01Model])],
  exports: [TypeOrmModule],
  providers: [HiiragiRW01Service],
  controllers: [HiiragiRW01Controller],
})

export class HiiragiRW01Module {}
