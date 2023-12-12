import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutWithdrawal_transactionsInput } from './players-create-without-withdrawal-transactions.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutWithdrawal_transactionsInput } from './players-create-or-connect-without-withdrawal-transactions.input';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedOneWithoutWithdrawal_transactionsInput {

    @Field(() => playersCreateWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => playersCreateWithoutWithdrawal_transactionsInput)
    create?: playersCreateWithoutWithdrawal_transactionsInput;

    @Field(() => playersCreateOrConnectWithoutWithdrawal_transactionsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutWithdrawal_transactionsInput)
    connectOrCreate?: playersCreateOrConnectWithoutWithdrawal_transactionsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;
}
