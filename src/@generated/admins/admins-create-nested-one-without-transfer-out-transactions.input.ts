import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsCreateWithoutTransfer_out_transactionsInput } from './admins-create-without-transfer-out-transactions.input';
import { Type } from 'class-transformer';
import { adminsCreateOrConnectWithoutTransfer_out_transactionsInput } from './admins-create-or-connect-without-transfer-out-transactions.input';
import { adminsWhereUniqueInput } from './admins-where-unique.input';

@InputType()
export class adminsCreateNestedOneWithoutTransfer_out_transactionsInput {

    @Field(() => adminsCreateWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => adminsCreateWithoutTransfer_out_transactionsInput)
    create?: adminsCreateWithoutTransfer_out_transactionsInput;

    @Field(() => adminsCreateOrConnectWithoutTransfer_out_transactionsInput, {nullable:true})
    @Type(() => adminsCreateOrConnectWithoutTransfer_out_transactionsInput)
    connectOrCreate?: adminsCreateOrConnectWithoutTransfer_out_transactionsInput;

    @Field(() => adminsWhereUniqueInput, {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    connect?: adminsWhereUniqueInput;
}
