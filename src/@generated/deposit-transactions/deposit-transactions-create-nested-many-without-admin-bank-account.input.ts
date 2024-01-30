import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsCreateWithoutAdmin_bank_accountInput } from './deposit-transactions-create-without-admin-bank-account.input';
import { Type } from 'class-transformer';
import { deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountInput } from './deposit-transactions-create-or-connect-without-admin-bank-account.input';
import { deposit_transactionsCreateManyAdmin_bank_accountInputEnvelope } from './deposit-transactions-create-many-admin-bank-account-input-envelope.input';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';

@InputType()
export class deposit_transactionsCreateNestedManyWithoutAdmin_bank_accountInput {

    @Field(() => [deposit_transactionsCreateWithoutAdmin_bank_accountInput], {nullable:true})
    @Type(() => deposit_transactionsCreateWithoutAdmin_bank_accountInput)
    create?: Array<deposit_transactionsCreateWithoutAdmin_bank_accountInput>;

    @Field(() => [deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountInput], {nullable:true})
    @Type(() => deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountInput)
    connectOrCreate?: Array<deposit_transactionsCreateOrConnectWithoutAdmin_bank_accountInput>;

    @Field(() => deposit_transactionsCreateManyAdmin_bank_accountInputEnvelope, {nullable:true})
    @Type(() => deposit_transactionsCreateManyAdmin_bank_accountInputEnvelope)
    createMany?: deposit_transactionsCreateManyAdmin_bank_accountInputEnvelope;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    connect?: Array<deposit_transactionsWhereUniqueInput>;
}
