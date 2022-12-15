/* NestJS(common) */
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
} from "@nestjs/common";

/* models */
import { HiiragiRW02Model } from "src/models/hiiragi/hiiragi-rw02.model";

/* services */
import { HiiragiRW02Service } from "src/services/hiiragi/hiiragi-rw02.service";


@Controller('hiiragirw02')
export class HiiragiRW02Controller {
  constructor(private readonly hiiragiRW02Service: HiiragiRW02Service) {}

  /**
   * 全件取得を行います。
   * @returns 路線情報
   */
  @Get()
  @HttpCode(HttpStatus.OK)
  selectAll(): Promise<HiiragiRW02Model[]> {
    return this.hiiragiRW02Service.findAll();
  }

  /**
   * 該当駅名コードで取得を行います。
   * @returns 路線情報
   */
   @Get(':staCode')
   async findByStaCode(@Param('staCode') staCode: string): Promise<HiiragiRW02Model> {
     return await this.hiiragiRW02Service.findByStaCode(staCode);
   }

}
