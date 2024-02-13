import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { adminsCreateWithoutTransfer_in_transactionsInput } from './admins-create-without-transfer-in-transactions.input';

@InputType()
export class adminsCreateOrConnectWithoutTransfer_in_transactionsInput {

    @Field(() => adminsWhereUniqueInput, {nullable:false})
    @Type(() => adminsWhereUniqueInput)
    where!: adminsWhereUniqueInput;

    @Field(() => adminsCreateWithoutTransfer_in_transactionsInput, {nullable:false})
    @Type(() => adminsCreateWithoutTransfer_in_transactionsInput)
    create!: adminsCreateWithoutTransfer_in_transactionsInput;
}
