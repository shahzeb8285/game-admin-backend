import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsCreateWithoutTransfer_out_transactionsInput } from './admins-create-without-transfer-out-transactions.input';
import { Type } from 'class-transformer';
import { adminsCreateOrConnectWithoutTransfer_out_transactionsInput } from './admins-create-or-connect-without-transfer-out-transactions.input';
import { adminsUpsertWithoutTransfer_out_transactionsInput } from './admins-upsert-without-transfer-out-transactions.input';
import { adminsWhereInput } from './admins-where.input';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { adminsUpdateToOneWithWhereWithoutTransfer_out_transactionsInput } from './admins-update-to-one-with-where-without-transfer-out-transactions.input';

@InputType()
export class adminsUpdateOneWithoutTransfer_out_transactionsNestedInput {

    @Field(() => adminsCreateWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => adminsCreateWithoutTransfer_out_transactionsInput)
    create?: adminsCreateWithoutTransfer_out_transactionsInput;

    @Field(() => adminsCreateOrConnectWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => adminsCreateOrConnectWithoutTransfer_out_transactionsInput)
    connectOrCreate?: adminsCreateOrConnectWithoutTransfer_out_transactionsInput;

    @Field(() => adminsUpsertWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => adminsUpsertWithoutTransfer_out_transactionsInput)
    upsert?: adminsUpsertWithoutTransfer_out_transactionsInput;

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    disconnect?: adminsWhereInput;

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    delete?: adminsWhereInput;

    @Field(() => adminsWhereUniqueInput, {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    connect?: adminsWhereUniqueInput;

    @Field(() => adminsUpdateToOneWithWhereWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => adminsUpdateToOneWithWhereWithoutTransfer_out_transactionsInput)
    update?: adminsUpdateToOneWithWhereWithoutTransfer_out_transactionsInput;
}
