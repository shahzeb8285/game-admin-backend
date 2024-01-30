import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_rebate_ratesUpdateInput } from '../player-rebate-rates/player-rebate-rates-update.input';
import { Type } from 'class-transformer';
import { player_rebate_ratesWhereUniqueInput } from '../player-rebate-rates/player-rebate-rates-where-unique.input';

@ArgsType()
export class UpdateOneplayerRebateRatesArgs {

    @Field(() => player_rebate_ratesUpdateInput, {nullable:false})
    @Type(() => player_rebate_ratesUpdateInput)
    data!: player_rebate_ratesUpdateInput;

    @Field(() => player_rebate_ratesWhereUniqueInput, {nullable:false})
    @Type(() => player_rebate_ratesWhereUniqueInput)
    where!: player_rebate_ratesWhereUniqueInput;
}
