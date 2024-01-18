import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput } from './withdrawal-transaction-create-without-admin-bank-accounts.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionCreateOrConnectWithoutAdmin_bank_accountsInput } from './withdrawal-transaction-create-or-connect-without-admin-bank-accounts.input';
import { WithdrawalTransactionCreateManyAdmin_bank_accountsInputEnvelope } from './withdrawal-transaction-create-many-admin-bank-accounts-input-envelope.input';
import { WithdrawalTransactionWhereUniqueInput } from './withdrawal-transaction-where-unique.input';

@InputType()
export class WithdrawalTransactionCreateNestedManyWithoutAdmin_bank_accountsInput {

    @Field(() => [WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput)
    create?: Array<WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput>;

    @Field(() => [WithdrawalTransactionCreateOrConnectWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => WithdrawalTransactionCreateOrConnectWithoutAdmin_bank_accountsInput)
    connectOrCreate?: Array<WithdrawalTransactionCreateOrConnectWithoutAdmin_bank_accountsInput>;

    @Field(() => WithdrawalTransactionCreateManyAdmin_bank_accountsInputEnvelope, {nullable:true})
    @Type(() => WithdrawalTransactionCreateManyAdmin_bank_accountsInputEnvelope)
    createMany?: WithdrawalTransactionCreateManyAdmin_bank_accountsInputEnvelope;

    @Field(() => [WithdrawalTransactionWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    connect?: Array<WithdrawalTransactionWhereUniqueInput>;
}
