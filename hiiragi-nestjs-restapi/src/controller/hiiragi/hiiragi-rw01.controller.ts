/* NestJS(common) */
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
} from "@nestjs/common";

/* models */
import { HiiragiRW01Model } from "src/models/hiiragi/hiiragi-rw01.model";

/* services */
import { HiiragiRW01Service } from "src/services/hiiragi/hiiragi-rw01.service";


@Controller('hiiragirw01')
export class HiiragiRW01Controller {
  constructor(private readonly hiiragiRW01Service: HiiragiRW01Service) {}

  /**
   * 全件取得を行います。
   * @returns 路線情報
   */
  @Get()
  @HttpCode(HttpStatus.OK)
  selectAll(): Promise<HiiragiRW01Model[]> {
    return this.hiiragiRW01Service.findAll();
  }

  /**
   * 該当駅名コードで取得を行います。
   * @returns 路線情報
   */
   @Get(':staCode')
   async findByStaCode(@Param('staCode') staCode: string): Promise<HiiragiRW01Model> {
     return await this.hiiragiRW01Service.findByStaCode(staCode);
   }

}
