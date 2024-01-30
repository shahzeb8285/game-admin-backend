import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Manual_adjustmentsAvgAggregate {

    @Field(() => Float, {nullable:true})
    amount?: number;
}
