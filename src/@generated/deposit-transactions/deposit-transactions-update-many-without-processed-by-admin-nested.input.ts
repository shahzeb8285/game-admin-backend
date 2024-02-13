import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { deposit_transactionsCreateWithoutProcessed_by_adminInput } from './deposit-transactions-create-without-processed-by-admin.input';
import { Type } from 'class-transformer';
import { deposit_transactionsCreateOrConnectWithoutProcessed_by_adminInput } from './deposit-transactions-create-or-connect-without-processed-by-admin.input';
import { deposit_transactionsUpsertWithWhereUniqueWithoutProcessed_by_adminInput } from './deposit-transactions-upsert-with-where-unique-without-processed-by-admin.input';
import { deposit_transactionsCreateManyProcessed_by_adminInputEnvelope } from './deposit-transactions-create-many-processed-by-admin-input-envelope.input';
import { deposit_transactionsWhereUniqueInput } from './deposit-transactions-where-unique.input';
import { deposit_transactionsUpdateWithWhereUniqueWithoutProcessed_by_adminInput } from './deposit-transactions-update-with-where-unique-without-processed-by-admin.input';
import { deposit_transactionsUpdateManyWithWhereWithoutProcessed_by_adminInput } from './deposit-transactions-update-many-with-where-without-processed-by-admin.input';
import { deposit_transactionsScalarWhereInput } from './deposit-transactions-scalar-where.input';

@InputType()
export class deposit_transactionsUpdateManyWithoutProcessed_by_adminNestedInput {

    @Field(() => [deposit_transactionsCreateWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => deposit_transactionsCreateWithoutProcessed_by_adminInput)
    create?: Array<deposit_transactionsCreateWithoutProcessed_by_adminInput>;

    @Field(() => [deposit_transactionsCreateOrConnectWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => deposit_transactionsCreateOrConnectWithoutProcessed_by_adminInput)
    connectOrCreate?: Array<deposit_transactionsCreateOrConnectWithoutProcessed_by_adminInput>;

    @Field(() => [deposit_transactionsUpsertWithWhereUniqueWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => deposit_transactionsUpsertWithWhereUniqueWithoutProcessed_by_adminInput)
    upsert?: Array<deposit_transactionsUpsertWithWhereUniqueWithoutProcessed_by_adminInput>;

    @Field(() => deposit_transactionsCreateManyProcessed_by_adminInputEnvelope, {nullable:true})
    @Type(() => deposit_transactionsCreateManyProcessed_by_adminInputEnvelope)
    createMany?: deposit_transactionsCreateManyProcessed_by_adminInputEnvelope;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    set?: Array<deposit_transactionsWhereUniqueInput>;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    disconnect?: Array<deposit_transactionsWhereUniqueInput>;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    delete?: Array<deposit_transactionsWhereUniqueInput>;

    @Field(() => [deposit_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => deposit_transactionsWhereUniqueInput)
    connect?: Array<deposit_transactionsWhereUniqueInput>;

    @Field(() => [deposit_transactionsUpdateWithWhereUniqueWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => deposit_transactionsUpdateWithWhereUniqueWithoutProcessed_by_adminInput)
    update?: Array<deposit_transactionsUpdateWithWhereUniqueWithoutProcessed_by_adminInput>;

    @Field(() => [deposit_transactionsUpdateManyWithWhereWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => deposit_transactionsUpdateManyWithWhereWithoutProcessed_by_adminInput)
    updateMany?: Array<deposit_transactionsUpdateManyWithWhereWithoutProcessed_by_adminInput>;

    @Field(() => [deposit_transactionsScalarWhereInput], {nullable:true})
    @Type(() => deposit_transactionsScalarWhereInput)
    deleteMany?: Array<deposit_transactionsScalarWhereInput>;
}
