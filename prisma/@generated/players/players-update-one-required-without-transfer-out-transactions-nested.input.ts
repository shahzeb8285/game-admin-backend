import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutTransfer_out_transactionsInput } from './players-create-without-transfer-out-transactions.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutTransfer_out_transactionsInput } from './players-create-or-connect-without-transfer-out-transactions.input';
import { playersUpsertWithoutTransfer_out_transactionsInput } from './players-upsert-without-transfer-out-transactions.input';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { playersUpdateToOneWithWhereWithoutTransfer_out_transactionsInput } from './players-update-to-one-with-where-without-transfer-out-transactions.input';

@InputType()
export class playersUpdateOneRequiredWithoutTransfer_out_transactionsNestedInput {

    @Field(() => playersCreateWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => playersCreateWithoutTransfer_out_transactionsInput)
    create?: playersCreateWithoutTransfer_out_transactionsInput;

    @Field(() => playersCreateOrConnectWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutTransfer_out_transactionsInput)
    connectOrCreate?: playersCreateOrConnectWithoutTransfer_out_transactionsInput;

    @Field(() => playersUpsertWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => playersUpsertWithoutTransfer_out_transactionsInput)
    upsert?: playersUpsertWithoutTransfer_out_transactionsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;

    @Field(() => playersUpdateToOneWithWhereWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => playersUpdateToOneWithWhereWithoutTransfer_out_transactionsInput)
    update?: playersUpdateToOneWithWhereWithoutTransfer_out_transactionsInput;
}
