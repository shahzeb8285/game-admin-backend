import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { player_rebate_ratesWhereInput } from '../player-rebate-rates/player-rebate-rates-where.input';

@InputType()
export class Player_rebate_ratesListRelationFilter {

    @Field(() => player_rebate_ratesWhereInput, {nullable:true})
    every?: player_rebate_ratesWhereInput;

    @Field(() => player_rebate_ratesWhereInput, {nullable:true})
    some?: player_rebate_ratesWhereInput;

    @Field(() => player_rebate_ratesWhereInput, {nullable:true})
    none?: player_rebate_ratesWhereInput;
}
