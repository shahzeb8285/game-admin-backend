import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersUpdateWithoutTransfer_in_transactionsInput } from './players-update-without-transfer-in-transactions.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutTransfer_in_transactionsInput } from './players-create-without-transfer-in-transactions.input';
import { playersWhereInput } from './players-where.input';

@InputType()
export class playersUpsertWithoutTransfer_in_transactionsInput {

    @Field(() => playersUpdateWithoutTransfer_in_transactionsInput, {nullable:false})
    @Type(() => playersUpdateWithoutTransfer_in_transactionsInput)
    update!: playersUpdateWithoutTransfer_in_transactionsInput;

    @Field(() => playersCreateWithoutTransfer_in_transactionsInput, {nullable:false})
    @Type(() => playersCreateWithoutTransfer_in_transactionsInput)
    create!: playersCreateWithoutTransfer_in_transactionsInput;

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;
}
