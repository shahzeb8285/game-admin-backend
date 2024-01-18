import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutTransfer_in_transactionsInput } from './players-update-without-transfer-in-transactions.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutTransfer_in_transactionsInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutTransfer_in_transactionsInput, {nullable:false})
    @Type(() => playersUpdateWithoutTransfer_in_transactionsInput)
    data!: playersUpdateWithoutTransfer_in_transactionsInput;
}
