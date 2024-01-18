import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepositTransactionCreateWithoutAdmin_bank_accountsInput } from './deposit-transaction-create-without-admin-bank-accounts.input';
import { Type } from 'class-transformer';
import { DepositTransactionCreateOrConnectWithoutAdmin_bank_accountsInput } from './deposit-transaction-create-or-connect-without-admin-bank-accounts.input';
import { DepositTransactionCreateManyAdmin_bank_accountsInputEnvelope } from './deposit-transaction-create-many-admin-bank-accounts-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DepositTransactionWhereUniqueInput } from './deposit-transaction-where-unique.input';

@InputType()
export class DepositTransactionUncheckedCreateNestedManyWithoutAdmin_bank_accountsInput {

    @Field(() => [DepositTransactionCreateWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => DepositTransactionCreateWithoutAdmin_bank_accountsInput)
    create?: Array<DepositTransactionCreateWithoutAdmin_bank_accountsInput>;

    @Field(() => [DepositTransactionCreateOrConnectWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => DepositTransactionCreateOrConnectWithoutAdmin_bank_accountsInput)
    connectOrCreate?: Array<DepositTransactionCreateOrConnectWithoutAdmin_bank_accountsInput>;

    @Field(() => DepositTransactionCreateManyAdmin_bank_accountsInputEnvelope, {nullable:true})
    @Type(() => DepositTransactionCreateManyAdmin_bank_accountsInputEnvelope)
    createMany?: DepositTransactionCreateManyAdmin_bank_accountsInputEnvelope;

    @Field(() => [DepositTransactionWhereUniqueInput], {nullable:true})
    @Type(() => DepositTransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DepositTransactionWhereUniqueInput, 'deposit_transaction_id'>>;
}
