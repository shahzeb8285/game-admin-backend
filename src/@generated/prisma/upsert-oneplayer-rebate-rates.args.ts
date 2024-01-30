import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_rebate_ratesWhereUniqueInput } from '../player-rebate-rates/player-rebate-rates-where-unique.input';
import { Type } from 'class-transformer';
import { player_rebate_ratesCreateInput } from '../player-rebate-rates/player-rebate-rates-create.input';
import { player_rebate_ratesUpdateInput } from '../player-rebate-rates/player-rebate-rates-update.input';

@ArgsType()
export class UpsertOneplayerRebateRatesArgs {

    @Field(() => player_rebate_ratesWhereUniqueInput, {nullable:false})
    @Type(() => player_rebate_ratesWhereUniqueInput)
    where!: player_rebate_ratesWhereUniqueInput;

    @Field(() => player_rebate_ratesCreateInput, {nullable:false})
    @Type(() => player_rebate_ratesCreateInput)
    create!: player_rebate_ratesCreateInput;

    @Field(() => player_rebate_ratesUpdateInput, {nullable:false})
    @Type(() => player_rebate_ratesUpdateInput)
    update!: player_rebate_ratesUpdateInput;
}
