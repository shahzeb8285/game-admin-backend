import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_default_rebate_ratesWhereUniqueInput } from '../player-default-rebate-rates/player-default-rebate-rates-where-unique.input';
import { Type } from 'class-transformer';
import { player_default_rebate_ratesCreateInput } from '../player-default-rebate-rates/player-default-rebate-rates-create.input';
import { player_default_rebate_ratesUpdateInput } from '../player-default-rebate-rates/player-default-rebate-rates-update.input';

@ArgsType()
export class UpsertOneplayerDefaultRebateRatesArgs {

    @Field(() => player_default_rebate_ratesWhereUniqueInput, {nullable:false})
    @Type(() => player_default_rebate_ratesWhereUniqueInput)
    where!: player_default_rebate_ratesWhereUniqueInput;

    @Field(() => player_default_rebate_ratesCreateInput, {nullable:false})
    @Type(() => player_default_rebate_ratesCreateInput)
    create!: player_default_rebate_ratesCreateInput;

    @Field(() => player_default_rebate_ratesUpdateInput, {nullable:false})
    @Type(() => player_default_rebate_ratesUpdateInput)
    update!: player_default_rebate_ratesUpdateInput;
}
