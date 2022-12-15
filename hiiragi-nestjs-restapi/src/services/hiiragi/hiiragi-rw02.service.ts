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
import { HiiragiRW02Model } from "src/models/hiiragi/hiiragi-rw02.model";

@Injectable()
export class HiiragiRW02Service {
  constructor(
    @InjectRepository(HiiragiRW02Model)
    private readonly hiiragiRW02Repository: Repository<HiiragiRW02Model>,
  ) {}

  async findAll(): Promise<HiiragiRW02Model[]> {
    return this.hiiragiRW02Repository.find();
  }

  /**
   * @summary 該当ID取得
   * @param id
   */
  async findOne(id: number): Promise<HiiragiRW02Model> {
    const hiiragiRW02Data = await this.hiiragiRW02Repository.findOneBy({ id });

    if (!hiiragiRW02Data) {
      throw new NotFoundException(
        `${id}に一致するデータが見つかりませんでした。`,
      );
    }
    return hiiragiRW02Data;
  }

  /**
   * @summary 該当駅名コード取得
   * @param staCode
   */
  async findByStaCode(staCode: string): Promise<HiiragiRW02Model> {
    const hiiragiRW02Data = await this.hiiragiRW02Repository.findOneBy({ staCode });

    if (!hiiragiRW02Data) {
      throw new NotFoundException(
        `${staCode}に一致するデータが見つかりませんでした。`,
      );
    }
    return hiiragiRW02Data;
  }
}
