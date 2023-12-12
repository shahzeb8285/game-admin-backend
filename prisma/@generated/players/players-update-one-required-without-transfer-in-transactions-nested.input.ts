import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutTransfer_in_transactionsInput } from './players-create-without-transfer-in-transactions.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutTransfer_in_transactionsInput } from './players-create-or-connect-without-transfer-in-transactions.input';
import { playersUpsertWithoutTransfer_in_transactionsInput } from './players-upsert-without-transfer-in-transactions.input';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutTransfer_in_transactionsInput } from './players-update-to-one-with-where-without-transfer-in-transactions.input';

@InputType()
export class playersUpdateOneRequiredWithoutTransfer_in_transactionsNestedInput {

    @Field(() => playersCreateWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => playersCreateWithoutTransfer_in_transactionsInput)
    create?: playersCreateWithoutTransfer_in_transactionsInput;

    @Field(() => playersCreateOrConnectWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutTransfer_in_transactionsInput)
    connectOrCreate?: playersCreateOrConnectWithoutTransfer_in_transactionsInput;

    @Field(() => playersUpsertWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => playersUpsertWithoutTransfer_in_transactionsInput)
    upsert?: playersUpsertWithoutTransfer_in_transactionsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => playersUpdateToOneWithWhereWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutTransfer_in_transactionsInput)
    update?: playersUpdateToOneWithWhereWithoutTransfer_in_transactionsInput;
}
