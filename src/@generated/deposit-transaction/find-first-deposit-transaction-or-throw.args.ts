import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DepositTransactionWhereInput } from './deposit-transaction-where.input';
import { Type } from 'class-transformer';
import { DepositTransactionOrderByWithRelationInput } from './deposit-transaction-order-by-with-relation.input';
import { DepositTransactionWhereUniqueInput } from './deposit-transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DepositTransactionScalarFieldEnum } from './deposit-transaction-scalar-field.enum';

@ArgsType()
export class FindFirstDepositTransactionOrThrowArgs {

    @Field(() => DepositTransactionWhereInput, {nullable:true})
    @Type(() => DepositTransactionWhereInput)
    where?: DepositTransactionWhereInput;

    @Field(() => [DepositTransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DepositTransactionOrderByWithRelationInput>;

    @Field(() => DepositTransactionWhereUniqueInput, {nullable:true})
    cursor?: DepositTransactionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DepositTransactionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DepositTransactionScalarFieldEnum>;
}
