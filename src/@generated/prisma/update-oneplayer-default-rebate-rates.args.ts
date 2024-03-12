import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_default_rebate_ratesUpdateInput } from '../player-default-rebate-rates/player-default-rebate-rates-update.input';
import { Type } from 'class-transformer';
import { player_default_rebate_ratesWhereUniqueInput } from '../player-default-rebate-rates/player-default-rebate-rates-where-unique.input';

@ArgsType()
export class UpdateOneplayerDefaultRebateRatesArgs {

    @Field(() => player_default_rebate_ratesUpdateInput, {nullable:false})
    @Type(() => player_default_rebate_ratesUpdateInput)
    data!: player_default_rebate_ratesUpdateInput;

    @Field(() => player_default_rebate_ratesWhereUniqueInput, {nullable:false})
    @Type(() => player_default_rebate_ratesWhereUniqueInput)
    where!: player_default_rebate_ratesWhereUniqueInput;
}
