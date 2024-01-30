import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_rebate_ratesWhereInput } from '../player-rebate-rates/player-rebate-rates-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyplayerRebateRatesArgs {

    @Field(() => player_rebate_ratesWhereInput, {nullable:true})
    @Type(() => player_rebate_ratesWhereInput)
    where?: player_rebate_ratesWhereInput;
}
