import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { playersWhereInput } from './players-where.input';
import { Type } from 'class-transformer';
import { playersUpdateWithoutTransfer_out_transactionsInput } from './players-update-without-transfer-out-transactions.input';

@InputType()
export class playersUpdateToOneWithWhereWithoutTransfer_out_transactionsInput {

    @Field(() => playersWhereInput, {nullable:true})
    @Type(() => playersWhereInput)
    where?: playersWhereInput;

    @Field(() => playersUpdateWithoutTransfer_out_transactionsInput, {nullable:false})
    @Type(() => playersUpdateWithoutTransfer_out_transactionsInput)
    data!: playersUpdateWithoutTransfer_out_transactionsInput;
}
