import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsCreateWithoutProcessed_by_adminInput } from './transfer-in-transactions-create-without-processed-by-admin.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsCreateOrConnectWithoutProcessed_by_adminInput } from './transfer-in-transactions-create-or-connect-without-processed-by-admin.input';
import { transfer_in_transactionsCreateManyProcessed_by_adminInputEnvelope } from './transfer-in-transactions-create-many-processed-by-admin-input-envelope.input';
import { transfer_in_transactionsWhereUniqueInput } from './transfer-in-transactions-where-unique.input';

@InputType()
export class transfer_in_transactionsUncheckedCreateNestedManyWithoutProcessed_by_adminInput {

    @Field(() => [transfer_in_transactionsCreateWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => transfer_in_transactionsCreateWithoutProcessed_by_adminInput)
    create?: Array<transfer_in_transactionsCreateWithoutProcessed_by_adminInput>;

    @Field(() => [transfer_in_transactionsCreateOrConnectWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => transfer_in_transactionsCreateOrConnectWithoutProcessed_by_adminInput)
    connectOrCreate?: Array<transfer_in_transactionsCreateOrConnectWithoutProcessed_by_adminInput>;

    @Field(() => transfer_in_transactionsCreateManyProcessed_by_adminInputEnvelope, {nullable:true})
    @Type(() => transfer_in_transactionsCreateManyProcessed_by_adminInputEnvelope)
    createMany?: transfer_in_transactionsCreateManyProcessed_by_adminInputEnvelope;

    @Field(() => [transfer_in_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    connect?: Array<transfer_in_transactionsWhereUniqueInput>;
}
