import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdminBankAccountCountAggregate {

    @Field(() => Int, {nullable:false})
    admin_bank_account_id!: number;

    @Field(() => Int, {nullable:false})
    bank_name!: number;

    @Field(() => Int, {nullable:false})
    account_number!: number;

    @Field(() => Int, {nullable:false})
    holder_name!: number;

    @Field(() => Int, {nullable:false})
    enabled!: number;

    @Field(() => Int, {nullable:false})
    method!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
