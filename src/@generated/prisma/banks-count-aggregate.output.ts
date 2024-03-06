import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BanksCountAggregate {

    @Field(() => Int, {nullable:false})
    bank_id!: number;

    @Field(() => Int, {nullable:false})
    bank_name!: number;

    @Field(() => Int, {nullable:false})
    bank_code!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
