import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawalTransactionWhereInput } from './withdrawal-transaction-where.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionOrderByWithRelationInput } from './withdrawal-transaction-order-by-with-relation.input';
import { WithdrawalTransactionWhereUniqueInput } from './withdrawal-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WithdrawalTransactionScalarFieldEnum } from './withdrawal-transaction-scalar-field.enum';

@ArgsType()
export class FindFirstWithdrawalTransactionArgs {

    @Field(() => WithdrawalTransactionWhereInput, {nullable:true})
    @Type(() => WithdrawalTransactionWhereInput)
    where?: WithdrawalTransactionWhereInput;

    @Field(() => [WithdrawalTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WithdrawalTransactionOrderByWithRelationInput>;

    @Field(() => WithdrawalTransactionWhereUniqueInput, {nullable:true})
    cursor?: WithdrawalTransactionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WithdrawalTransactionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof WithdrawalTransactionScalarFieldEnum>;
}
