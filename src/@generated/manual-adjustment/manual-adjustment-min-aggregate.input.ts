import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ManualAdjustmentMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    manual_adjustment_id?: true;

    @Field(() => Boolean, {nullable:true})
    player_id_r?: true;

    @Field(() => Boolean, {nullable:true})
    reason?: true;

    @Field(() => Boolean, {nullable:true})
    amount?: true;

    @Field(() => Boolean, {nullable:true})
    created_by_r?: true;

    @Field(() => Boolean, {nullable:true})
    cdate?: true;
}
