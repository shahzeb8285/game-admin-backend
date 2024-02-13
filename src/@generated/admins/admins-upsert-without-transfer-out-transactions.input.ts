import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsUpdateWithoutTransfer_out_transactionsInput } from './admins-update-without-transfer-out-transactions.input';
import { Type } from 'class-transformer';
import { adminsCreateWithoutTransfer_out_transactionsInput } from './admins-create-without-transfer-out-transactions.input';
import { adminsWhereInput } from './admins-where.input';

@InputType()
export class adminsUpsertWithoutTransfer_out_transactionsInput {

    @Field(() => adminsUpdateWithoutTransfer_out_transactionsInput, {nullable:false})
    @Type(() => adminsUpdateWithoutTransfer_out_transactionsInput)
    update!: adminsUpdateWithoutTransfer_out_transactionsInput;

    @Field(() => adminsCreateWithoutTransfer_out_transactionsInput, {nullable:false})
    @Type(() => adminsCreateWithoutTransfer_out_transactionsInput)
    create!: adminsCreateWithoutTransfer_out_transactionsInput;

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;
}
