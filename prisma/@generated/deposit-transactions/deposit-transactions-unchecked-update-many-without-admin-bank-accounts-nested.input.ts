import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsCreateWithoutAdmin_bank_accountsInput } from './deposit-transactions-create-without-admin-bank-accounts.input';
import { Type } from 'class-transformer';
import { deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput } from './deposit-transactions-create-or-connect-without-admin-bank-accounts.input';
import { deposit_transactionsUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput } from './deposit-transactions-upsert-with-where-unique-without-admin-bank-accounts.input';
import { deposit_transactionsCreateManyAdmin_bank_accountsInputEnvelope } from './deposit-transactions-create-many-admin-bank-accounts-input-envelope.input';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';
import { deposit_transactionsUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput } from './deposit-transactions-update-with-where-unique-without-admin-bank-accounts.input';
import { deposit_transactionsUpdateManyWithWhereWithoutAdmin_bank_accountsInput } from './deposit-transactions-update-many-with-where-without-admin-bank-accounts.input';
import { deposit_transactionsScalarWhereInput } from './deposit-transactions-scalar-where.input';

@InputType()
export class deposit_transactionsUncheckedUpdateManyWithoutAdmin_bank_accountsNestedInput {

    @Field(() => [deposit_transactionsCreateWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => deposit_transactionsCreateWithoutAdmin_bank_accountsInput)
    create?: Array<deposit_transactionsCreateWithoutAdmin_bank_accountsInput>;

    @Field(() => [deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput)
    connectOrCreate?: Array<deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput>;

    @Field(() => [deposit_transactionsUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => deposit_transactionsUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput)
    upsert?: Array<deposit_transactionsUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput>;

    @Field(() => deposit_transactionsCreateManyAdmin_bank_accountsInputEnvelope, {nullable:true})
    @Type(() => deposit_transactionsCreateManyAdmin_bank_accountsInputEnvelope)
    createMany?: deposit_transactionsCreateManyAdmin_bank_accountsInputEnvelope;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    set?: Array<deposit_transactionsWhereUniqueInput>;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    disconnect?: Array<deposit_transactionsWhereUniqueInput>;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    delete?: Array<deposit_transactionsWhereUniqueInput>;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    connect?: Array<deposit_transactionsWhereUniqueInput>;

    @Field(() => [deposit_transactionsUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => deposit_transactionsUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput)
    update?: Array<deposit_transactionsUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput>;

    @Field(() => [deposit_transactionsUpdateManyWithWhereWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => deposit_transactionsUpdateManyWithWhereWithoutAdmin_bank_accountsInput)
    updateMany?: Array<deposit_transactionsUpdateManyWithWhereWithoutAdmin_bank_accountsInput>;

    @Field(() => [deposit_transactionsScalarWhereInput], {nullable:true})
    @Type(() => deposit_transactionsScalarWhereInput)
    deleteMany?: Array<deposit_transactionsScalarWhereInput>;
}
