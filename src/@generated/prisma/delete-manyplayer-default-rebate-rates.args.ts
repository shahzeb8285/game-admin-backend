import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_default_rebate_ratesWhereInput } from '../player-default-rebate-rates/player-default-rebate-rates-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyplayerDefaultRebateRatesArgs {

    @Field(() => player_default_rebate_ratesWhereInput, {nullable:true})
    @Type(() => player_default_rebate_ratesWhereInput)
    where?: player_default_rebate_ratesWhereInput;
}
