import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_out_transactionsCreateWithoutProcessed_by_adminInput } from './transfer-out-transactions-create-without-processed-by-admin.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsCreateOrConnectWithoutProcessed_by_adminInput } from './transfer-out-transactions-create-or-connect-without-processed-by-admin.input';
import { transfer_out_transactionsCreateManyProcessed_by_adminInputEnvelope } from './transfer-out-transactions-create-many-processed-by-admin-input-envelope.input';
import { transfer_out_transactionsWhereUniqueInput } from './transfer-out-transactions-where-unique.input';

@InputType()
export class transfer_out_transactionsCreateNestedManyWithoutProcessed_by_adminInput {

    @Field(() => [transfer_out_transactionsCreateWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => transfer_out_transactionsCreateWithoutProcessed_by_adminInput)
    create?: Array<transfer_out_transactionsCreateWithoutProcessed_by_adminInput>;

    @Field(() => [transfer_out_transactionsCreateOrConnectWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => transfer_out_transactionsCreateOrConnectWithoutProcessed_by_adminInput)
    connectOrCreate?: Array<transfer_out_transactionsCreateOrConnectWithoutProcessed_by_adminInput>;

    @Field(() => transfer_out_transactionsCreateManyProcessed_by_adminInputEnvelope, {nullable:true})
    @Type(() => transfer_out_transactionsCreateManyProcessed_by_adminInputEnvelope)
    createMany?: transfer_out_transactionsCreateManyProcessed_by_adminInputEnvelope;

    @Field(() => [transfer_out_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    connect?: Array<transfer_out_transactionsWhereUniqueInput>;
}
