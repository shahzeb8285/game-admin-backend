import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutTransfer_in_transactionsInput } from './players-create-without-transfer-in-transactions.input';

@InputType()
export class playersCreateOrConnectWithoutTransfer_in_transactionsInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutTransfer_in_transactionsInput, {nullable:false})
    @Type(() => playersCreateWithoutTransfer_in_transactionsInput)
    create!: playersCreateWithoutTransfer_in_transactionsInput;
}
