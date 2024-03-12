import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_default_rebate_ratesCreateManyInput } from '../player-default-rebate-rates/player-default-rebate-rates-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyplayerDefaultRebateRatesArgs {

    @Field(() => [player_default_rebate_ratesCreateManyInput], {nullable:false})
    @Type(() => player_default_rebate_ratesCreateManyInput)
    data!: Array<player_default_rebate_ratesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
