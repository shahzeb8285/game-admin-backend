import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameRebateSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    effective_bet_amount?: true;

    @Field(() => Boolean, {nullable:true})
    rebate_amount?: true;
}
