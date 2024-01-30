import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_rebate_ratesWhereUniqueInput } from '../player-rebate-rates/player-rebate-rates-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueplayerRebateRatesOrThrowArgs {

    @Field(() => player_rebate_ratesWhereUniqueInput, {nullable:false})
    @Type(() => player_rebate_ratesWhereUniqueInput)
    where!: player_rebate_ratesWhereUniqueInput;
}
