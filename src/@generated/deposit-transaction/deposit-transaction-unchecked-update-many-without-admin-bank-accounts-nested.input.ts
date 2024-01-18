import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepositTransactionCreateWithoutAdmin_bank_accountsInput } from './deposit-transaction-create-without-admin-bank-accounts.input';
import { Type } from 'class-transformer';
import { DepositTransactionCreateOrConnectWithoutAdmin_bank_accountsInput } from './deposit-transaction-create-or-connect-without-admin-bank-accounts.input';
import { DepositTransactionUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput } from './deposit-transaction-upsert-with-where-unique-without-admin-bank-accounts.input';
import { DepositTransactionCreateManyAdmin_bank_accountsInputEnvelope } from './deposit-transaction-create-many-admin-bank-accounts-input-envelope.input';
import { DepositTransactionWhereUniqueInput } from './deposit-transaction-where-unique.input';
import { DepositTransactionUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput } from './deposit-transaction-update-with-where-unique-without-admin-bank-accounts.input';
import { DepositTransactionUpdateManyWithWhereWithoutAdmin_bank_accountsInput } from './deposit-transaction-update-many-with-where-without-admin-bank-accounts.input';
import { DepositTransactionScalarWhereInput } from './deposit-transaction-scalar-where.input';

@InputType()
export class DepositTransactionUncheckedUpdateManyWithoutAdmin_bank_accountsNestedInput {

    @Field(() => [DepositTransactionCreateWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => DepositTransactionCreateWithoutAdmin_bank_accountsInput)
    create?: Array<DepositTransactionCreateWithoutAdmin_bank_accountsInput>;

    @Field(() => [DepositTransactionCreateOrConnectWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => DepositTransactionCreateOrConnectWithoutAdmin_bank_accountsInput)
    connectOrCreate?: Array<DepositTransactionCreateOrConnectWithoutAdmin_bank_accountsInput>;

    @Field(() => [DepositTransactionUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => DepositTransactionUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput)
    upsert?: Array<DepositTransactionUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput>;

    @Field(() => DepositTransactionCreateManyAdmin_bank_accountsInputEnvelope, {nullable:true})
    @Type(() => DepositTransactionCreateManyAdmin_bank_accountsInputEnvelope)
    createMany?: DepositTransactionCreateManyAdmin_bank_accountsInputEnvelope;

    @Field(() => [DepositTransactionWhereUniqueInput], {nullable:true})
    @Type(() => DepositTransactionWhereUniqueInput)
    set?: Array<DepositTransactionWhereUniqueInput>;

    @Field(() => [DepositTransactionWhereUniqueInput], {nullable:true})
    @Type(() => DepositTransactionWhereUniqueInput)
    disconnect?: Array<DepositTransactionWhereUniqueInput>;

    @Field(() => [DepositTransactionWhereUniqueInput], {nullable:true})
    @Type(() => DepositTransactionWhereUniqueInput)
    delete?: Array<DepositTransactionWhereUniqueInput>;

    @Field(() => [DepositTransactionWhereUniqueInput], {nullable:true})
    @Type(() => DepositTransactionWhereUniqueInput)
    connect?: Array<DepositTransactionWhereUniqueInput>;

    @Field(() => [DepositTransactionUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => DepositTransactionUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput)
    update?: Array<DepositTransactionUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput>;

    @Field(() => [DepositTransactionUpdateManyWithWhereWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => DepositTransactionUpdateManyWithWhereWithoutAdmin_bank_accountsInput)
    updateMany?: Array<DepositTransactionUpdateManyWithWhereWithoutAdmin_bank_accountsInput>;

    @Field(() => [DepositTransactionScalarWhereInput], {nullable:true})
    @Type(() => DepositTransactionScalarWhereInput)
    deleteMany?: Array<DepositTransactionScalarWhereInput>;
}
