/* NestJS(Common) */
import {
  Injectable,
  NotFoundException
} from "@nestjs/common";

/* NestJS(typeorm) */
import { InjectRepository } from "@nestjs/typeorm";

/* TypeORM */
import { Repository } from "typeorm";

/* models */
import { HiiragiRW01Model } from "src/models/hiiragi/hiiragi-rw01.model";

@Injectable()
export class HiiragiRW01Service {
  constructor(
    @InjectRepository(HiiragiRW01Model)
    private readonly hiiragiRW01Repository: Repository<HiiragiRW01Model>,
  ) {}

  async findAll(): Promise<HiiragiRW01Model[]> {
    return this.hiiragiRW01Repository.find();
  }

  /**
   * @summary 該当ID取得
   * @param id
   */
  async findOne(id: number): Promise<HiiragiRW01Model> {
    const hiiragiRW01Data = await this.hiiragiRW01Repository.findOneBy({ id });

    if (!hiiragiRW01Data) {
      throw new NotFoundException(
        `${id}に一致するデータが見つかりませんでした。`,
      );
    }
    return hiiragiRW01Data;
  }

  /**
   * @summary 該当駅名コード取得
   * @param staCode
   */
  async findByStaCode(staCode: string): Promise<HiiragiRW01Model> {
    const hiiragiRW01Data = await this.hiiragiRW01Repository.findOneBy({ staCode });

    if (!hiiragiRW01Data) {
      throw new NotFoundException(
        `${staCode}に一致するデータが見つかりませんでした。`,
      );
    }
    return hiiragiRW01Data;
  }
}
