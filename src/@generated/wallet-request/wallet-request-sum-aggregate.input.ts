import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WalletRequestSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    jackpot_win?: true;
}
