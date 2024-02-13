import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsWhereInput } from './admins-where.input';
import { Type } from 'class-transformer';
import { adminsUpdateWithoutTransfer_in_transactionsInput } from './admins-update-without-transfer-in-transactions.input';

@InputType()
export class adminsUpdateToOneWithWhereWithoutTransfer_in_transactionsInput {

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;

    @Field(() => adminsUpdateWithoutTransfer_in_transactionsInput, {nullable:false})
    @Type(() => adminsUpdateWithoutTransfer_in_transactionsInput)
    data!: adminsUpdateWithoutTransfer_in_transactionsInput;
}
