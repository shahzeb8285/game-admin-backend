import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ManualAdjustmentSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    amount?: true;
}
