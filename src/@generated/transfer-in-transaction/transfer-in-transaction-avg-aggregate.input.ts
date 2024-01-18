import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TransferInTransactionAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
