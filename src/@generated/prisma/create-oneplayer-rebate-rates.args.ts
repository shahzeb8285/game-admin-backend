import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_rebate_ratesCreateInput } from '../player-rebate-rates/player-rebate-rates-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneplayerRebateRatesArgs {

    @Field(() => player_rebate_ratesCreateInput, {nullable:false})
    @Type(() => player_rebate_ratesCreateInput)
    data!: player_rebate_ratesCreateInput;
}
