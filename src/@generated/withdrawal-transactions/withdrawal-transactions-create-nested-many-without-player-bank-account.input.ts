import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsCreateWithoutPlayer_bank_accountInput } from './withdrawal-transactions-create-without-player-bank-account.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsCreateOrConnectWithoutPlayer_bank_accountInput } from './withdrawal-transactions-create-or-connect-without-player-bank-account.input';
import { withdrawal_transactionsCreateManyPlayer_bank_accountInputEnvelope } from './withdrawal-transactions-create-many-player-bank-account-input-envelope.input';
import { withdrawal_transactionsWhereUniqueInput } from './withdrawal-transactions-where-unique.input';

@InputType()
export class withdrawal_transactionsCreateNestedManyWithoutPlayer_bank_accountInput {

    @Field(() => [withdrawal_transactionsCreateWithoutPlayer_bank_accountInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateWithoutPlayer_bank_accountInput)
    create?: Array<withdrawal_transactionsCreateWithoutPlayer_bank_accountInput>;

    @Field(() => [withdrawal_transactionsCreateOrConnectWithoutPlayer_bank_accountInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateOrConnectWithoutPlayer_bank_accountInput)
    connectOrCreate?: Array<withdrawal_transactionsCreateOrConnectWithoutPlayer_bank_accountInput>;

    @Field(() => withdrawal_transactionsCreateManyPlayer_bank_accountInputEnvelope, {nullable:true})
    @Type(() => withdrawal_transactionsCreateManyPlayer_bank_accountInputEnvelope)
    createMany?: withdrawal_transactionsCreateManyPlayer_bank_accountInputEnvelope;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    connect?: Array<withdrawal_transactionsWhereUniqueInput>;
}
