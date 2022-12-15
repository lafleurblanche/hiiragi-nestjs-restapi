/* NestJS(common) */
import { Module } from "@nestjs/common";

/* NestJS(typeorm) */
import { TypeOrmModule } from "@nestjs/typeorm";

/* controller */
import { HiiragiRW02Controller } from "src/controller/hiiragi/hiiragi-rw02.controller";

/* models */
import { HiiragiRW02Model } from "src/models/hiiragi/hiiragi-rw02.model";

/* services */
import { HiiragiRW02Service } from "src/services/hiiragi/hiiragi-rw02.service";

@Module({
  imports: [TypeOrmModule.forFeature([HiiragiRW02Model])],
  exports: [TypeOrmModule],
  providers: [HiiragiRW02Service],
  controllers: [HiiragiRW02Controller],
})

export class HiiragiRW02Module {}
