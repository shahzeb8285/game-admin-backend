import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutTransfer_out_transactionsInput } from './players-update-without-transfer-out-transactions.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutTransfer_out_transactionsInput } from './players-create-without-transfer-out-transactions.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutTransfer_out_transactionsInput {

    @Field(() => playersUpdateWithoutTransfer_out_transactionsInput, {nullable:false})
    @Type(() => playersUpdateWithoutTransfer_out_transactionsInput)
    update!: playersUpdateWithoutTransfer_out_transactionsInput;

    @Field(() => playersCreateWithoutTransfer_out_transactionsInput, {nullable:false})
    @Type(() => playersCreateWithoutTransfer_out_transactionsInput)
    create!: playersCreateWithoutTransfer_out_transactionsInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
