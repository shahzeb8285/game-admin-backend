import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_default_rebate_ratesWhereUniqueInput } from '../player-default-rebate-rates/player-default-rebate-rates-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneplayerDefaultRebateRatesArgs {

    @Field(() => player_default_rebate_ratesWhereUniqueInput, {nullable:false})
    @Type(() => player_default_rebate_ratesWhereUniqueInput)
    where!: player_default_rebate_ratesWhereUniqueInput;
}
