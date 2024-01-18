import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ManualAdjustmentAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
