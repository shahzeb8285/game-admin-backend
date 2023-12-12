import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsCreateWithoutAdmin_bank_accountsInput } from './deposit-transactions-create-without-admin-bank-accounts.input';
import { Type } from 'class-transformer';
import { deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput } from './deposit-transactions-create-or-connect-without-admin-bank-accounts.input';
import { deposit_transactionsCreateManyAdmin_bank_accountsInputEnvelope } from './deposit-transactions-create-many-admin-bank-accounts-input-envelope.input';
import { Prisma } from '@prisma/client';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';

@InputType()
export class deposit_transactionsUncheckedCreateNestedManyWithoutAdmin_bank_accountsInput {

    @Field(() => [deposit_transactionsCreateWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => deposit_transactionsCreateWithoutAdmin_bank_accountsInput)
    create?: Array<deposit_transactionsCreateWithoutAdmin_bank_accountsInput>;

    @Field(() => [deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput)
    connectOrCreate?: Array<deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput>;

    @Field(() => deposit_transactionsCreateManyAdmin_bank_accountsInputEnvelope, {nullable:true})
    @Type(() => deposit_transactionsCreateManyAdmin_bank_accountsInputEnvelope)
    createMany?: deposit_transactionsCreateManyAdmin_bank_accountsInputEnvelope;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<deposit_transactionsWhereUniqueInput, 'deposit_transaction_id'>>;
}
