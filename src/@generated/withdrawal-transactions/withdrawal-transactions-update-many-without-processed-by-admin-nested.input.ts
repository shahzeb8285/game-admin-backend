import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { withdrawal_transactionsCreateWithoutProcessed_by_adminInput } from './withdrawal-transactions-create-without-processed-by-admin.input';
import { Type } from 'class-transformer';
import { withdrawal_transactionsCreateOrConnectWithoutProcessed_by_adminInput } from './withdrawal-transactions-create-or-connect-without-processed-by-admin.input';
import { withdrawal_transactionsUpsertWithWhereUniqueWithoutProcessed_by_adminInput } from './withdrawal-transactions-upsert-with-where-unique-without-processed-by-admin.input';
import { withdrawal_transactionsCreateManyProcessed_by_adminInputEnvelope } from './withdrawal-transactions-create-many-processed-by-admin-input-envelope.input';
import { withdrawal_transactionsWhereUniqueInput } from './withdrawal-transactions-where-unique.input';
import { withdrawal_transactionsUpdateWithWhereUniqueWithoutProcessed_by_adminInput } from './withdrawal-transactions-update-with-where-unique-without-processed-by-admin.input';
import { withdrawal_transactionsUpdateManyWithWhereWithoutProcessed_by_adminInput } from './withdrawal-transactions-update-many-with-where-without-processed-by-admin.input';
import { withdrawal_transactionsScalarWhereInput } from './withdrawal-transactions-scalar-where.input';

@InputType()
export class withdrawal_transactionsUpdateManyWithoutProcessed_by_adminNestedInput {

    @Field(() => [withdrawal_transactionsCreateWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateWithoutProcessed_by_adminInput)
    create?: Array<withdrawal_transactionsCreateWithoutProcessed_by_adminInput>;

    @Field(() => [withdrawal_transactionsCreateOrConnectWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => withdrawal_transactionsCreateOrConnectWithoutProcessed_by_adminInput)
    connectOrCreate?: Array<withdrawal_transactionsCreateOrConnectWithoutProcessed_by_adminInput>;

    @Field(() => [withdrawal_transactionsUpsertWithWhereUniqueWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => withdrawal_transactionsUpsertWithWhereUniqueWithoutProcessed_by_adminInput)
    upsert?: Array<withdrawal_transactionsUpsertWithWhereUniqueWithoutProcessed_by_adminInput>;

    @Field(() => withdrawal_transactionsCreateManyProcessed_by_adminInputEnvelope, {nullable:true})
    @Type(() => withdrawal_transactionsCreateManyProcessed_by_adminInputEnvelope)
    createMany?: withdrawal_transactionsCreateManyProcessed_by_adminInputEnvelope;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    set?: Array<withdrawal_transactionsWhereUniqueInput>;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    disconnect?: Array<withdrawal_transactionsWhereUniqueInput>;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    delete?: Array<withdrawal_transactionsWhereUniqueInput>;

    @Field(() => [withdrawal_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => withdrawal_transactionsWhereUniqueInput)
    connect?: Array<withdrawal_transactionsWhereUniqueInput>;

    @Field(() => [withdrawal_transactionsUpdateWithWhereUniqueWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => withdrawal_transactionsUpdateWithWhereUniqueWithoutProcessed_by_adminInput)
    update?: Array<withdrawal_transactionsUpdateWithWhereUniqueWithoutProcessed_by_adminInput>;

    @Field(() => [withdrawal_transactionsUpdateManyWithWhereWithoutProcessed_by_adminInput], {nullable:true})
    @Type(() => withdrawal_transactionsUpdateManyWithWhereWithoutProcessed_by_adminInput)
    updateMany?: Array<withdrawal_transactionsUpdateManyWithWhereWithoutProcessed_by_adminInput>;

    @Field(() => [withdrawal_transactionsScalarWhereInput], {nullable:true})
    @Type(() => withdrawal_transactionsScalarWhereInput)
    deleteMany?: Array<withdrawal_transactionsScalarWhereInput>;
}
