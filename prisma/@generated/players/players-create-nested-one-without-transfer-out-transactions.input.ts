import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersCreateWithoutTransfer_out_transactionsInput } from './players-create-without-transfer-out-transactions.input';
import { Type } from 'class-transformer';
import { playersCreateOrConnectWithoutTransfer_out_transactionsInput } from './players-create-or-connect-without-transfer-out-transactions.input';
import { Prisma } from '@prisma/client';
import { playersWhereUniqueInput } from './players-where-unique.input';

@InputType()
export class playersCreateNestedOneWithoutTransfer_out_transactionsInput {

    @Field(() => playersCreateWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => playersCreateWithoutTransfer_out_transactionsInput)
    create?: playersCreateWithoutTransfer_out_transactionsInput;

    @Field(() => playersCreateOrConnectWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => playersCreateOrConnectWithoutTransfer_out_transactionsInput)
    connectOrCreate?: playersCreateOrConnectWithoutTransfer_out_transactionsInput;

    @Field(() => playersWhereUniqueInput, {nullable:true})
    @Type(() => playersWhereUniqueInput)
    connect?: Prisma.AtLeast<playersWhereUniqueInput, 'player_id' | 'tg_id' | 'tg_user_name'>;
}
