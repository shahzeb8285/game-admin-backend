import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ManualAdjustmentCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    manual_adjustment_id?: true;

    @Field(() => Boolean, {nullable:true})
    player_id?: true;

    @Field(() => Boolean, {nullable:true})
    reason?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    created_by?: true;

    @Field(() => Boolean, {nullable:true})
    cdate?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
