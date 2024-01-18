import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput } from './withdrawal-transaction-create-without-admin-bank-accounts.input';
import { Type } from 'class-transformer';
import { WithdrawalTransactionCreateOrConnectWithoutAdmin_bank_accountsInput } from './withdrawal-transaction-create-or-connect-without-admin-bank-accounts.input';
import { WithdrawalTransactionUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput } from './withdrawal-transaction-upsert-with-where-unique-without-admin-bank-accounts.input';
import { WithdrawalTransactionCreateManyAdmin_bank_accountsInputEnvelope } from './withdrawal-transaction-create-many-admin-bank-accounts-input-envelope.input';
import { WithdrawalTransactionWhereUniqueInput } from './withdrawal-transaction-where-unique.input';
import { WithdrawalTransactionUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput } from './withdrawal-transaction-update-with-where-unique-without-admin-bank-accounts.input';
import { WithdrawalTransactionUpdateManyWithWhereWithoutAdmin_bank_accountsInput } from './withdrawal-transaction-update-many-with-where-without-admin-bank-accounts.input';
import { WithdrawalTransactionScalarWhereInput } from './withdrawal-transaction-scalar-where.input';

@InputType()
export class WithdrawalTransactionUncheckedUpdateManyWithoutAdmin_bank_accountsNestedInput {

    @Field(() => [WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput)
    create?: Array<WithdrawalTransactionCreateWithoutAdmin_bank_accountsInput>;

    @Field(() => [WithdrawalTransactionCreateOrConnectWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => WithdrawalTransactionCreateOrConnectWithoutAdmin_bank_accountsInput)
    connectOrCreate?: Array<WithdrawalTransactionCreateOrConnectWithoutAdmin_bank_accountsInput>;

    @Field(() => [WithdrawalTransactionUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => WithdrawalTransactionUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput)
    upsert?: Array<WithdrawalTransactionUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput>;

    @Field(() => WithdrawalTransactionCreateManyAdmin_bank_accountsInputEnvelope, {nullable:true})
    @Type(() => WithdrawalTransactionCreateManyAdmin_bank_accountsInputEnvelope)
    createMany?: WithdrawalTransactionCreateManyAdmin_bank_accountsInputEnvelope;

    @Field(() => [WithdrawalTransactionWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    set?: Array<WithdrawalTransactionWhereUniqueInput>;

    @Field(() => [WithdrawalTransactionWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    disconnect?: Array<WithdrawalTransactionWhereUniqueInput>;

    @Field(() => [WithdrawalTransactionWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    delete?: Array<WithdrawalTransactionWhereUniqueInput>;

    @Field(() => [WithdrawalTransactionWhereUniqueInput], {nullable:true})
    @Type(() => WithdrawalTransactionWhereUniqueInput)
    connect?: Array<WithdrawalTransactionWhereUniqueInput>;

    @Field(() => [WithdrawalTransactionUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => WithdrawalTransactionUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput)
    update?: Array<WithdrawalTransactionUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput>;

    @Field(() => [WithdrawalTransactionUpdateManyWithWhereWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => WithdrawalTransactionUpdateManyWithWhereWithoutAdmin_bank_accountsInput)
    updateMany?: Array<WithdrawalTransactionUpdateManyWithWhereWithoutAdmin_bank_accountsInput>;

    @Field(() => [WithdrawalTransactionScalarWhereInput], {nullable:true})
    @Type(() => WithdrawalTransactionScalarWhereInput)
    deleteMany?: Array<WithdrawalTransactionScalarWhereInput>;
}
