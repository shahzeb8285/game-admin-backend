import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsCreateWithoutTransfer_in_transactionsInput } from './admins-create-without-transfer-in-transactions.input';
import { Type } from 'class-transformer';
import { adminsCreateOrConnectWithoutTransfer_in_transactionsInput } from './admins-create-or-connect-without-transfer-in-transactions.input';
import { adminsUpsertWithoutTransfer_in_transactionsInput } from './admins-upsert-without-transfer-in-transactions.input';
import { adminsWhereInput } from './admins-where.input';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { adminsUpdateToOneWithWhereWithoutTransfer_in_transactionsInput } from './admins-update-to-one-with-where-without-transfer-in-transactions.input';

@InputType()
export class adminsUpdateOneWithoutTransfer_in_transactionsNestedInput {

    @Field(() => adminsCreateWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => adminsCreateWithoutTransfer_in_transactionsInput)
    create?: adminsCreateWithoutTransfer_in_transactionsInput;

    @Field(() => adminsCreateOrConnectWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => adminsCreateOrConnectWithoutTransfer_in_transactionsInput)
    connectOrCreate?: adminsCreateOrConnectWithoutTransfer_in_transactionsInput;

    @Field(() => adminsUpsertWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => adminsUpsertWithoutTransfer_in_transactionsInput)
    upsert?: adminsUpsertWithoutTransfer_in_transactionsInput;

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    disconnect?: adminsWhereInput;

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    delete?: adminsWhereInput;

    @Field(() => adminsWhereUniqueInput, {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    connect?: adminsWhereUniqueInput;

    @Field(() => adminsUpdateToOneWithWhereWithoutTransfer_in_transactionsInput, {nullable:true})
    @Type(() => adminsUpdateToOneWithWhereWithoutTransfer_in_transactionsInput)
    update?: adminsUpdateToOneWithWhereWithoutTransfer_in_transactionsInput;
}
