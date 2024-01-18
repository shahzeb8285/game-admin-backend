import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class WalletRequestAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    jackpot_win?: true;
}
