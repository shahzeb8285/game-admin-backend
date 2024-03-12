import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_default_rebate_ratesUpdateManyMutationInput } from '../player-default-rebate-rates/player-default-rebate-rates-update-many-mutation.input';
import { Type } from 'class-transformer';
import { player_default_rebate_ratesWhereInput } from '../player-default-rebate-rates/player-default-rebate-rates-where.input';

@ArgsType()
export class UpdateManyplayerDefaultRebateRatesArgs {

    @Field(() => player_default_rebate_ratesUpdateManyMutationInput, {nullable:false})
    @Type(() => player_default_rebate_ratesUpdateManyMutationInput)
    data!: player_default_rebate_ratesUpdateManyMutationInput;

    @Field(() => player_default_rebate_ratesWhereInput, {nullable:true})
    @Type(() => player_default_rebate_ratesWhereInput)
    where?: player_default_rebate_ratesWhereInput;
}
