import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_default_rebate_ratesCreateInput } from '../player-default-rebate-rates/player-default-rebate-rates-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneplayerDefaultRebateRatesArgs {

    @Field(() => player_default_rebate_ratesCreateInput, {nullable:false})
    @Type(() => player_default_rebate_ratesCreateInput)
    data!: player_default_rebate_ratesCreateInput;
}
