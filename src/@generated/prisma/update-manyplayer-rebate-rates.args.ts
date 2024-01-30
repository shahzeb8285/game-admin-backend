import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { player_rebate_ratesUpdateManyMutationInput } from '../player-rebate-rates/player-rebate-rates-update-many-mutation.input';
import { Type } from 'class-transformer';
import { player_rebate_ratesWhereInput } from '../player-rebate-rates/player-rebate-rates-where.input';

@ArgsType()
export class UpdateManyplayerRebateRatesArgs {

    @Field(() => player_rebate_ratesUpdateManyMutationInput, {nullable:false})
    @Type(() => player_rebate_ratesUpdateManyMutationInput)
    data!: player_rebate_ratesUpdateManyMutationInput;

    @Field(() => player_rebate_ratesWhereInput, {nullable:true})
    @Type(() => player_rebate_ratesWhereInput)
    where?: player_rebate_ratesWhereInput;
}
