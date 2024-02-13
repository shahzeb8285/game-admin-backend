import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsUpdateWithoutTransfer_in_transactionsInput } from './admins-update-without-transfer-in-transactions.input';
import { Type } from 'class-transformer';
import { adminsCreateWithoutTransfer_in_transactionsInput } from './admins-create-without-transfer-in-transactions.input';
import { adminsWhereInput } from './admins-where.input';

@InputType()
export class adminsUpsertWithoutTransfer_in_transactionsInput {

    @Field(() => adminsUpdateWithoutTransfer_in_transactionsInput, {nullable:false})
    @Type(() => adminsUpdateWithoutTransfer_in_transactionsInput)
    update!: adminsUpdateWithoutTransfer_in_transactionsInput;

    @Field(() => adminsCreateWithoutTransfer_in_transactionsInput, {nullable:false})
    @Type(() => adminsCreateWithoutTransfer_in_transactionsInput)
    create!: adminsCreateWithoutTransfer_in_transactionsInput;

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;
}
