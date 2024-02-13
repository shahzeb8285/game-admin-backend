import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { adminsCreateWithoutTransfer_out_transactionsInput } from './admins-create-without-transfer-out-transactions.input';

@InputType()
export class adminsCreateOrConnectWithoutTransfer_out_transactionsInput {

    @Field(() => adminsWhereUniqueInput, {nullable:false})
    @Type(() => adminsWhereUniqueInput)
    where!: adminsWhereUniqueInput;

    @Field(() => adminsCreateWithoutTransfer_out_transactionsInput, {nullable:false})
    @Type(() => adminsCreateWithoutTransfer_out_transactionsInput)
    create!: adminsCreateWithoutTransfer_out_transactionsInput;
}
