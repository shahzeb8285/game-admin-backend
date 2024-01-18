import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameRebateMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    game_rebates_id?: true;

    @Field(() => Boolean, {nullable:true})
    game_history_id?: true;

    @Field(() => Boolean, {nullable:true})
    merchant_id?: true;

    @Field(() => Boolean, {nullable:true})
    game_id?: true;

    @Field(() => Boolean, {nullable:true})
    category?: true;

    @Field(() => Boolean, {nullable:true})
    effective_bet_amount?: true;

    @Field(() => Boolean, {nullable:true})
    rebate_amount?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    cdate?: true;
}
