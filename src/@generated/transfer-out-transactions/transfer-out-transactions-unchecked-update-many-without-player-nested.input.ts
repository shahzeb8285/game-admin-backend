import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_out_transactionsCreateWithoutPlayerInput } from './transfer-out-transactions-create-without-player.input';
import { Type } from 'class-transformer';
import { transfer_out_transactionsCreateOrConnectWithoutPlayerInput } from './transfer-out-transactions-create-or-connect-without-player.input';
import { transfer_out_transactionsUpsertWithWhereUniqueWithoutPlayerInput } from './transfer-out-transactions-upsert-with-where-unique-without-player.input';
import { transfer_out_transactionsCreateManyPlayerInputEnvelope } from './transfer-out-transactions-create-many-player-input-envelope.input';
import { transfer_out_transactionsWhereUniqueInput } from './transfer-out-transactions-where-unique.input';
import { transfer_out_transactionsUpdateWithWhereUniqueWithoutPlayerInput } from './transfer-out-transactions-update-with-where-unique-without-player.input';
import { transfer_out_transactionsUpdateManyWithWhereWithoutPlayerInput } from './transfer-out-transactions-update-many-with-where-without-player.input';
import { transfer_out_transactionsScalarWhereInput } from './transfer-out-transactions-scalar-where.input';

@InputType()
export class transfer_out_transactionsUncheckedUpdateManyWithoutPlayerNestedInput {

    @Field(() => [transfer_out_transactionsCreateWithoutPlayerInput], {nullable:true})
    @Type(() => transfer_out_transactionsCreateWithoutPlayerInput)
    create?: Array<transfer_out_transactionsCreateWithoutPlayerInput>;

    @Field(() => [transfer_out_transactionsCreateOrConnectWithoutPlayerInput], {nullable:true})
    @Type(() => transfer_out_transactionsCreateOrConnectWithoutPlayerInput)
    connectOrCreate?: Array<transfer_out_transactionsCreateOrConnectWithoutPlayerInput>;

    @Field(() => [transfer_out_transactionsUpsertWithWhereUniqueWithoutPlayerInput], {nullable:true})
    @Type(() => transfer_out_transactionsUpsertWithWhereUniqueWithoutPlayerInput)
    upsert?: Array<transfer_out_transactionsUpsertWithWhereUniqueWithoutPlayerInput>;

    @Field(() => transfer_out_transactionsCreateManyPlayerInputEnvelope, {nullable:true})
    @Type(() => transfer_out_transactionsCreateManyPlayerInputEnvelope)
    createMany?: transfer_out_transactionsCreateManyPlayerInputEnvelope;

    @Field(() => [transfer_out_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    set?: Array<transfer_out_transactionsWhereUniqueInput>;

    @Field(() => [transfer_out_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    disconnect?: Array<transfer_out_transactionsWhereUniqueInput>;

    @Field(() => [transfer_out_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    delete?: Array<transfer_out_transactionsWhereUniqueInput>;

    @Field(() => [transfer_out_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => transfer_out_transactionsWhereUniqueInput)
    connect?: Array<transfer_out_transactionsWhereUniqueInput>;

    @Field(() => [transfer_out_transactionsUpdateWithWhereUniqueWithoutPlayerInput], {nullable:true})
    @Type(() => transfer_out_transactionsUpdateWithWhereUniqueWithoutPlayerInput)
    update?: Array<transfer_out_transactionsUpdateWithWhereUniqueWithoutPlayerInput>;

    @Field(() => [transfer_out_transactionsUpdateManyWithWhereWithoutPlayerInput], {nullable:true})
    @Type(() => transfer_out_transactionsUpdateManyWithWhereWithoutPlayerInput)
    updateMany?: Array<transfer_out_transactionsUpdateManyWithWhereWithoutPlayerInput>;

    @Field(() => [transfer_out_transactionsScalarWhereInput], {nullable:true})
    @Type(() => transfer_out_transactionsScalarWhereInput)
    deleteMany?: Array<transfer_out_transactionsScalarWhereInput>;
}
