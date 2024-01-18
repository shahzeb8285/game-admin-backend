import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput } from './withdrawal-transactions-create-without-admin-bank-accounts.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput } from './withdrawal-transactions-create-or-connect-without-admin-bank-accounts.input';
import { withdrawal_transactionsUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput } from './withdrawal-transactions-upsert-with-where-unique-without-admin-bank-accounts.input';
import { withdrawal_transactionsCreateManyAdmin_bank_accountsInputEnvelope } from './withdrawal-transactions-create-many-admin-bank-accounts-input-envelope.input';
import { withdrawal_transactionsWhereUniqueInput } from './withdrawal-transactions-where-unique.input';
import { withdrawal_transactionsUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput } from './withdrawal-transactions-update-with-where-unique-without-admin-bank-accounts.input';
import { withdrawal_transactionsUpdateManyWithWhereWithoutAdmin_bank_accountsInput } from './withdrawal-transactions-update-many-with-where-without-admin-bank-accounts.input';
import { withdrawal_transactionsScalarWhereInput } from './withdrawal-transactions-scalar-where.input';

@InputType()
export class withdrawal_transactionsUpdateManyWithoutAdmin_bank_accountsNestedInput {

    @Field(() => [withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput)
    create?: Array<withdrawal_transactionsCreateWithoutAdmin_bank_accountsInput>;

    @Field(() => [withdrawal_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput)
    connectOrCreate?: Array<withdrawal_transactionsCreateOrConnectWithoutAdmin_bank_accountsInput>;

    @Field(() => [withdrawal_transactionsUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => withdrawal_transactionsUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput)
    upsert?: Array<withdrawal_transactionsUpsertWithWhereUniqueWithoutAdmin_bank_accountsInput>;

    @Field(() => withdrawal_transactionsCreateManyAdmin_bank_accountsInputEnvelope, {nullable:true})
    @Type(() => withdrawal_transactionsCreateManyAdmin_bank_accountsInputEnvelope)
    createMany?: withdrawal_transactionsCreateManyAdmin_bank_accountsInputEnvelope;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    set?: Array<withdrawal_transactionsWhereUniqueInput>;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    disconnect?: Array<withdrawal_transactionsWhereUniqueInput>;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    delete?: Array<withdrawal_transactionsWhereUniqueInput>;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    connect?: Array<withdrawal_transactionsWhereUniqueInput>;

    @Field(() => [withdrawal_transactionsUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => withdrawal_transactionsUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput)
    update?: Array<withdrawal_transactionsUpdateWithWhereUniqueWithoutAdmin_bank_accountsInput>;

    @Field(() => [withdrawal_transactionsUpdateManyWithWhereWithoutAdmin_bank_accountsInput], {nullable:true})
    @Type(() => withdrawal_transactionsUpdateManyWithWhereWithoutAdmin_bank_accountsInput)
    updateMany?: Array<withdrawal_transactionsUpdateManyWithWhereWithoutAdmin_bank_accountsInput>;

    @Field(() => [withdrawal_transactionsScalarWhereInput], {nullable:true})
    @Type(() => withdrawal_transactionsScalarWhereInput)
    deleteMany?: Array<withdrawal_transactionsScalarWhereInput>;
}
