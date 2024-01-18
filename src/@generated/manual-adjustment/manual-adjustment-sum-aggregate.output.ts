import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ManualAdjustmentSumAggregate {

    @Field(() => Float, {nullable:true})
    amount?: number;
}
