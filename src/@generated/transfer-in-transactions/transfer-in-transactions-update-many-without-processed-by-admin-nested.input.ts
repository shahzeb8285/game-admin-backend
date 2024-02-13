import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsCreateWithoutProcessed_by_adminInput } from './transfer-in-transactions-create-without-processed-by-admin.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsCreateOrConnectWithoutProcessed_by_adminInput } from './transfer-in-transactions-create-or-connect-without-processed-by-admin.input';
import { transfer_in_transactionsUpsertWithWhereUniqueWithoutProcessed_by_adminInput } from './transfer-in-transactions-upsert-with-where-unique-without-processed-by-admin.input';
import { transfer_in_transactionsCreateManyProcessed_by_adminInputEnvelope } from './transfer-in-transactions-create-many-processed-by-admin-input-envelope.input';
import { transfer_in_transactionsWhereUniqueInput } from './transfer-in-transactions-where-unique.input';
import { transfer_in_transactionsUpdateWithWhereUniqueWithoutProcessed_by_adminInput } from './transfer-in-transactions-update-with-where-unique-without-processed-by-admin.input';
import { transfer_in_transactionsUpdateManyWithWhereWithoutProcessed_by_adminInput } from './transfer-in-transactions-update-many-with-where-without-processed-by-admin.input';
import { transfer_in_transactionsScalarWhereInput } from './transfer-in-transactions-scalar-where.input';

@InputType()
export class transfer_in_transactionsUpdateManyWithoutProcessed_by_adminNestedInput {

    @Field(() => [transfer_in_transactionsCreateWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => transfer_in_transactionsCreateWithoutProcessed_by_adminInput)
    create?: Array<transfer_in_transactionsCreateWithoutProcessed_by_adminInput>;

    @Field(() => [transfer_in_transactionsCreateOrConnectWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => transfer_in_transactionsCreateOrConnectWithoutProcessed_by_adminInput)
    connectOrCreate?: Array<transfer_in_transactionsCreateOrConnectWithoutProcessed_by_adminInput>;

    @Field(() => [transfer_in_transactionsUpsertWithWhereUniqueWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => transfer_in_transactionsUpsertWithWhereUniqueWithoutProcessed_by_adminInput)
    upsert?: Array<transfer_in_transactionsUpsertWithWhereUniqueWithoutProcessed_by_adminInput>;

    @Field(() => transfer_in_transactionsCreateManyProcessed_by_adminInputEnvelope, {nullable:true})
    @Type(() => transfer_in_transactionsCreateManyProcessed_by_adminInputEnvelope)
    createMany?: transfer_in_transactionsCreateManyProcessed_by_adminInputEnvelope;

    @Field(() => [transfer_in_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    set?: Array<transfer_in_transactionsWhereUniqueInput>;

    @Field(() => [transfer_in_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    disconnect?: Array<transfer_in_transactionsWhereUniqueInput>;

    @Field(() => [transfer_in_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    delete?: Array<transfer_in_transactionsWhereUniqueInput>;

    @Field(() => [transfer_in_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_in_transactionsWhereUniqueInput)
    connect?: Array<transfer_in_transactionsWhereUniqueInput>;

    @Field(() => [transfer_in_transactionsUpdateWithWhereUniqueWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => transfer_in_transactionsUpdateWithWhereUniqueWithoutProcessed_by_adminInput)
    update?: Array<transfer_in_transactionsUpdateWithWhereUniqueWithoutProcessed_by_adminInput>;

    @Field(() => [transfer_in_transactionsUpdateManyWithWhereWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => transfer_in_transactionsUpdateManyWithWhereWithoutProcessed_by_adminInput)
    updateMany?: Array<transfer_in_transactionsUpdateManyWithWhereWithoutProcessed_by_adminInput>;

    @Field(() => [transfer_in_transactionsScalarWhereInput], {nullable:true})
    @Type(() => transfer_in_transactionsScalarWhereInput)
    deleteMany?: Array<transfer_in_transactionsScalarWhereInput>;
}
