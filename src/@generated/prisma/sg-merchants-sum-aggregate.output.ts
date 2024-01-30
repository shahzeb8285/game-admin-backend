import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Sg_merchantsSumAggregate {

    @Field(() => Int, {nullable:true})
    merchant_id?: number;
}
