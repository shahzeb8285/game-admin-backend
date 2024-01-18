import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GameHistorySumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    bet_amount?: true;

    @Field(() => Boolean, {nullable:true})
    win_amount?: true;
}
