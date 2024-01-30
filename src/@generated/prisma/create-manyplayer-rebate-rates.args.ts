import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_rebate_ratesCreateManyInput } from '../player-rebate-rates/player-rebate-rates-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyplayerRebateRatesArgs {

    @Field(() => [player_rebate_ratesCreateManyInput], {nullable:false})
    @Type(() => player_rebate_ratesCreateManyInput)
    data!: Array<player_rebate_ratesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
