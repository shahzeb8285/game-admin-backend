import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsCreateWithoutPlayer_bank_accountInput } from './withdrawal-transactions-create-without-player-bank-account.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsCreateOrConnectWithoutPlayer_bank_accountInput } from './withdrawal-transactions-create-or-connect-without-player-bank-account.input';
import { withdrawal_transactionsUpsertWithWhereUniqueWithoutPlayer_bank_accountInput } from './withdrawal-transactions-upsert-with-where-unique-without-player-bank-account.input';
import { withdrawal_transactionsCreateManyPlayer_bank_accountInputEnvelope } from './withdrawal-transactions-create-many-player-bank-account-input-envelope.input';
import { withdrawal_transactionsWhereUniqueInput } from './withdrawal-transactions-where-unique.input';
import { withdrawal_transactionsUpdateWithWhereUniqueWithoutPlayer_bank_accountInput } from './withdrawal-transactions-update-with-where-unique-without-player-bank-account.input';
import { withdrawal_transactionsUpdateManyWithWhereWithoutPlayer_bank_accountInput } from './withdrawal-transactions-update-many-with-where-without-player-bank-account.input';
import { withdrawal_transactionsScalarWhereInput } from './withdrawal-transactions-scalar-where.input';

@InputType()
export class withdrawal_transactionsUpdateManyWithoutPlayer_bank_accountNestedInput {

    @Field(() => [withdrawal_transactionsCreateWithoutPlayer_bank_accountInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateWithoutPlayer_bank_accountInput)
    create?: Array<withdrawal_transactionsCreateWithoutPlayer_bank_accountInput>;

    @Field(() => [withdrawal_transactionsCreateOrConnectWithoutPlayer_bank_accountInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateOrConnectWithoutPlayer_bank_accountInput)
    connectOrCreate?: Array<withdrawal_transactionsCreateOrConnectWithoutPlayer_bank_accountInput>;

    @Field(() => [withdrawal_transactionsUpsertWithWhereUniqueWithoutPlayer_bank_accountInput], {nullable:true})
    @Type(() => withdrawal_transactionsUpsertWithWhereUniqueWithoutPlayer_bank_accountInput)
    upsert?: Array<withdrawal_transactionsUpsertWithWhereUniqueWithoutPlayer_bank_accountInput>;

    @Field(() => withdrawal_transactionsCreateManyPlayer_bank_accountInputEnvelope, {nullable:true})
    @Type(() => withdrawal_transactionsCreateManyPlayer_bank_accountInputEnvelope)
    createMany?: withdrawal_transactionsCreateManyPlayer_bank_accountInputEnvelope;

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

    @Field(() => [withdrawal_transactionsUpdateWithWhereUniqueWithoutPlayer_bank_accountInput], {nullable:true})
    @Type(() => withdrawal_transactionsUpdateWithWhereUniqueWithoutPlayer_bank_accountInput)
    update?: Array<withdrawal_transactionsUpdateWithWhereUniqueWithoutPlayer_bank_accountInput>;

    @Field(() => [withdrawal_transactionsUpdateManyWithWhereWithoutPlayer_bank_accountInput], {nullable:true})
    @Type(() => withdrawal_transactionsUpdateManyWithWhereWithoutPlayer_bank_accountInput)
    updateMany?: Array<withdrawal_transactionsUpdateManyWithWhereWithoutPlayer_bank_accountInput>;

    @Field(() => [withdrawal_transactionsScalarWhereInput], {nullable:true})
    @Type(() => withdrawal_transactionsScalarWhereInput)
    deleteMany?: Array<withdrawal_transactionsScalarWhereInput>;
}
