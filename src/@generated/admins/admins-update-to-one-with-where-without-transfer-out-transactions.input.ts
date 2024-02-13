import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsWhereInput } from './admins-where.input';
import { Type } from 'class-transformer';
import { adminsUpdateWithoutTransfer_out_transactionsInput } from './admins-update-without-transfer-out-transactions.input';

@InputType()
export class adminsUpdateToOneWithWhereWithoutTransfer_out_transactionsInput {

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;

    @Field(() => adminsUpdateWithoutTransfer_out_transactionsInput, {nullable:false})
    @Type(() => adminsUpdateWithoutTransfer_out_transactionsInput)
    data!: adminsUpdateWithoutTransfer_out_transactionsInput;
}
