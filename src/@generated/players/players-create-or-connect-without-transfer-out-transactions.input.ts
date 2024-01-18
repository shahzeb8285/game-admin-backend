import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereUniqueInput } from './players-where-unique.input';
import { Type } from 'class-transformer';
import { playersCreateWithoutTransfer_out_transactionsInput } from './players-create-without-transfer-out-transactions.input';

@InputType()
export class playersCreateOrConnectWithoutTransfer_out_transactionsInput {

    @Field(() => playersWhereUniqueInput, {nullable:false})
    @Type(() => playersWhereUniqueInput)
    where!: playersWhereUniqueInput;

    @Field(() => playersCreateWithoutTransfer_out_transactionsInput, {nullable:false})
    @Type(() => playersCreateWithoutTransfer_out_transactionsInput)
    create!: playersCreateWithoutTransfer_out_transactionsInput;
}
