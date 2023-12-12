import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput } from './withdrawal-transactions-create-without-admin-bank-accounts.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput } from './withdrawal-transactions-create-or-connect-without-admin-bank-accounts.input';
import { withdrawal_transactionsCreateManyAdmin_bank_accountsInputEnvelope } from './withdrawal-transactions-create-many-admin-bank-accounts-input-envelope.input';
import { Prisma } from '@prisma/client';
import { withdrawal_transactionsWhereUniqueInput } from './withdrawal-transactions-where-unique.input';

@InputType()
export class withdrawal_transactionsUncheckedCreateNestedManyWithoutAdmin_bank_accountsInput {

    @Field(() => [withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput)
    create?: Array<withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput>;

    @Field(() => [withdrawal_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput)
    connectOrCreate?: Array<withdrawal_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput>;

    @Field(() => withdrawal_transactionsCreateManyAdmin_bank_accountsInputEnvelope, {nullable:true})
    @Type(() => withdrawal_transactionsCreateManyAdmin_bank_accountsInputEnvelope)
    createMany?: withdrawal_transactionsCreateManyAdmin_bank_accountsInputEnvelope;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<withdrawal_transactionsWhereUniqueInput, 'withdrawal_transaction_id'>>;
}
