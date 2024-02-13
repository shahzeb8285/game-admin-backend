import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsCreateWithoutTransfer_in_transactionsInput } from './admins-create-without-transfer-in-transactions.input';
import { Type } from 'class-transformer';
import { adminsCreateOrConnectWithoutTransfer_in_transactionsInput } from './admins-create-or-connect-without-transfer-in-transactions.input';
import { adminsWhereUniqueInput } from './admins-where-unique.input';

@InputType()
export class adminsCreateNestedOneWithoutTransfer_in_transactionsInput {

    @Field(() => adminsCreateWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => adminsCreateWithoutTransfer_in_transactionsInput)
    create?: adminsCreateWithoutTransfer_in_transactionsInput;

    @Field(() => adminsCreateOrConnectWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => adminsCreateOrConnectWithoutTransfer_in_transactionsInput)
    connectOrCreate?: adminsCreateOrConnectWithoutTransfer_in_transactionsInput;

    @Field(() => adminsWhereUniqueInput, {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    connect?: adminsWhereUniqueInput;
}
