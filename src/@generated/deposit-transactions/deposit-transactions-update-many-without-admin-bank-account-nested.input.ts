import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsCreateWithoutAdmin_bank_accountInput } from './deposit-transactions-create-without-admin-bank-account.input';
import { Type } from 'class-transformer';
import { deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountInput } from './deposit-transactions-create-or-connect-without-admin-bank-account.input';
import { deposit_transactionsUpsertWithWhereUniqueWithoutAdmin_bank_accountInput } from './deposit-transactions-upsert-with-where-unique-without-admin-bank-account.input';
import { deposit_transactionsCreateManyAdmin_bank_accountInputEnvelope } from './deposit-transactions-create-many-admin-bank-account-input-envelope.input';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';
import { deposit_transactionsUpdateWithWhereUniqueWithoutAdmin_bank_accountInput } from './deposit-transactions-update-with-where-unique-without-admin-bank-account.input';
import { deposit_transactionsUpdateManyWithWhereWithoutAdmin_bank_accountInput } from './deposit-transactions-update-many-with-where-without-admin-bank-account.input';
import { deposit_transactionsScalarWhereInput } from './deposit-transactions-scalar-where.input';

@InputType()
export class deposit_transactionsUpdateManyWithoutAdmin_bank_accountNestedInput {

    @Field(() => [deposit_transactionsCreateWithoutAdmin_bank_accountInput], {nullable:true})
    @Type(() => deposit_transactionsCreateWithoutAdmin_bank_accountInput)
    create?: Array<deposit_transactionsCreateWithoutAdmin_bank_accountInput>;

    @Field(() => [deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountInput], {nullable:true})
    @Type(() => deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountInput)
    connectOrCreate?: Array<deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountInput>;

    @Field(() => [deposit_transactionsUpsertWithWhereUniqueWithoutAdmin_bank_accountInput], {nullable:true})
    @Type(() => deposit_transactionsUpsertWithWhereUniqueWithoutAdmin_bank_accountInput)
    upsert?: Array<deposit_transactionsUpsertWithWhereUniqueWithoutAdmin_bank_accountInput>;

    @Field(() => deposit_transactionsCreateManyAdmin_bank_accountInputEnvelope, {nullable:true})
    @Type(() => deposit_transactionsCreateManyAdmin_bank_accountInputEnvelope)
    createMany?: deposit_transactionsCreateManyAdmin_bank_accountInputEnvelope;

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

    @Field(() => [deposit_transactionsUpdateWithWhereUniqueWithoutAdmin_bank_accountInput], {nullable:true})
    @Type(() => deposit_transactionsUpdateWithWhereUniqueWithoutAdmin_bank_accountInput)
    update?: Array<deposit_transactionsUpdateWithWhereUniqueWithoutAdmin_bank_accountInput>;

    @Field(() => [deposit_transactionsUpdateManyWithWhereWithoutAdmin_bank_accountInput], {nullable:true})
    @Type(() => deposit_transactionsUpdateManyWithWhereWithoutAdmin_bank_accountInput)
    updateMany?: Array<deposit_transactionsUpdateManyWithWhereWithoutAdmin_bank_accountInput>;

    @Field(() => [deposit_transactionsScalarWhereInput], {nullable:true})
    @Type(() => deposit_transactionsScalarWhereInput)
    deleteMany?: Array<deposit_transactionsScalarWhereInput>;
}
