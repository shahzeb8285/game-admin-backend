import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Manual_adjustmentsCountAggregate {

    @Field(() => Int, {nullable:false})
    manual_adjustment_id!: number;

    @Field(() => Int, {nullable:false})
    player_id!: number;

    @Field(() => Int, {nullable:false})
    reason!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    created_by!: number;

    @Field(() => Int, {nullable:false})
    cdate!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
