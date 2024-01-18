import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ManualAdjustmentCountAggregate {

    @Field(() => Int, {nullable:false})
    manual_adjustment_id!: number;

    @Field(() => Int, {nullable:false})
    player_id_r!: number;

    @Field(() => Int, {nullable:false})
    reason!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    created_by_r!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
