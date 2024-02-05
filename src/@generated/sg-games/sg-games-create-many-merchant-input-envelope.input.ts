import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { sg_gamesCreateManyMerchantInput } from './sg-games-create-many-merchant.input';
import { Type } from 'class-transformer';

@InputType()
export class sg_gamesCreateManyMerchantInputEnvelope {

    @Field(() => [sg_gamesCreateManyMerchantInput], {nullable:false})
    @Type(() => sg_gamesCreateManyMerchantInput)
    data!: Array<sg_gamesCreateManyMerchantInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
