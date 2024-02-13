import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { transfer_in_transactionsCreateWithoutPlayerInput } from './transfer-in-transactions-create-without-player.input';
import { Type } from 'class-transformer';
import { transfer_in_transactionsCreateOrConnectWithoutPlayerInput } from './transfer-in-transactions-create-or-connect-without-player.input';
import { transfer_in_transactionsUpsertWithWhereUniqueWithoutPlayerInput } from './transfer-in-transactions-upsert-with-where-unique-without-player.input';
import { transfer_in_transactionsCreateManyPlayerInputEnvelope } from './transfer-in-transactions-create-many-player-input-envelope.input';
import { transfer_in_transactionsWhereUniqueInput } from './transfer-in-transactions-where-unique.input';
import { transfer_in_transactionsUpdateWithWhereUniqueWithoutPlayerInput } from './transfer-in-transactions-update-with-where-unique-without-player.input';
import { transfer_in_transactionsUpdateManyWithWhereWithoutPlayerInput } from './transfer-in-transactions-update-many-with-where-without-player.input';
import { transfer_in_transactionsScalarWhereInput } from './transfer-in-transactions-scalar-where.input';

@InputType()
export class transfer_in_transactionsUncheckedUpdateManyWithoutPlayerNestedInput {

    @Field(() => [transfer_in_transactionsCreateWithoutPlayerInput], {nullable:true})
    @Type(() => transfer_in_transactionsCreateWithoutPlayerInput)
    create?: Array<transfer_in_transactionsCreateWithoutPlayerInput>;

    @Field(() => [transfer_in_transactionsCreateOrConnectWithoutPlayerInput], {nullable:true})
    @Type(() => transfer_in_transactionsCreateOrConnectWithoutPlayerInput)
    connectOrCreate?: Array<transfer_in_transactionsCreateOrConnectWithoutPlayerInput>;

    @Field(() => [transfer_in_transactionsUpsertWithWhereUniqueWithoutPlayerInput], {nullable:true})
    @Type(() => transfer_in_transactionsUpsertWithWhereUniqueWithoutPlayerInput)
    upsert?: Array<transfer_in_transactionsUpsertWithWhereUniqueWithoutPlayerInput>;

    @Field(() => transfer_in_transactionsCreateManyPlayerInputEnvelope, {nullable:true})
    @Type(() => transfer_in_transactionsCreateManyPlayerInputEnvelope)
    createMany?: transfer_in_transactionsCreateManyPlayerInputEnvelope;

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

    @Field(() => [transfer_in_transactionsUpdateWithWhereUniqueWithoutPlayerInput], {nullable:true})
    @Type(() => transfer_in_transactionsUpdateWithWhereUniqueWithoutPlayerInput)
    update?: Array<transfer_in_transactionsUpdateWithWhereUniqueWithoutPlayerInput>;

    @Field(() => [transfer_in_transactionsUpdateManyWithWhereWithoutPlayerInput], {nullable:true})
    @Type(() => transfer_in_transactionsUpdateManyWithWhereWithoutPlayerInput)
    updateMany?: Array<transfer_in_transactionsUpdateManyWithWhereWithoutPlayerInput>;

    @Field(() => [transfer_in_transactionsScalarWhereInput], {nullable:true})
    @Type(() => transfer_in_transactionsScalarWhereInput)
    deleteMany?: Array<transfer_in_transactionsScalarWhereInput>;
}
