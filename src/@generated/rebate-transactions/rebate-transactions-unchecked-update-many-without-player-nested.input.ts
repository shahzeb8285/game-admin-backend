import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rebate_transactionsCreateWithoutPlayerInput } from './rebate-transactions-create-without-player.input';
import { Type } from 'class-transformer';
import { rebate_transactionsCreateOrConnectWithoutPlayerInput } from './rebate-transactions-create-or-connect-without-player.input';
import { rebate_transactionsUpsertWithWhereUniqueWithoutPlayerInput } from './rebate-transactions-upsert-with-where-unique-without-player.input';
import { rebate_transactionsCreateManyPlayerInputEnvelope } from './rebate-transactions-create-many-player-input-envelope.input';
import { rebate_transactionsWhereUniqueInput } from './rebate-transactions-where-unique.input';
import { rebate_transactionsUpdateWithWhereUniqueWithoutPlayerInput } from './rebate-transactions-update-with-where-unique-without-player.input';
import { rebate_transactionsUpdateManyWithWhereWithoutPlayerInput } from './rebate-transactions-update-many-with-where-without-player.input';
import { rebate_transactionsScalarWhereInput } from './rebate-transactions-scalar-where.input';

@InputType()
export class rebate_transactionsUncheckedUpdateManyWithoutPlayerNestedInput {

    @Field(() => [rebate_transactionsCreateWithoutPlayerInput], {nullable:true})
    @Type(() => rebate_transactionsCreateWithoutPlayerInput)
    create?: Array<rebate_transactionsCreateWithoutPlayerInput>;

    @Field(() => [rebate_transactionsCreateOrConnectWithoutPlayerInput], {nullable:true})
    @Type(() => rebate_transactionsCreateOrConnectWithoutPlayerInput)
    connectOrCreate?: Array<rebate_transactionsCreateOrConnectWithoutPlayerInput>;

    @Field(() => [rebate_transactionsUpsertWithWhereUniqueWithoutPlayerInput], {nullable:true})
    @Type(() => rebate_transactionsUpsertWithWhereUniqueWithoutPlayerInput)
    upsert?: Array<rebate_transactionsUpsertWithWhereUniqueWithoutPlayerInput>;

    @Field(() => rebate_transactionsCreateManyPlayerInputEnvelope, {nullable:true})
    @Type(() => rebate_transactionsCreateManyPlayerInputEnvelope)
    createMany?: rebate_transactionsCreateManyPlayerInputEnvelope;

    @Field(() => [rebate_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => rebate_transactionsWhereUniqueInput)
    set?: Array<rebate_transactionsWhereUniqueInput>;

    @Field(() => [rebate_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => rebate_transactionsWhereUniqueInput)
    disconnect?: Array<rebate_transactionsWhereUniqueInput>;

    @Field(() => [rebate_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => rebate_transactionsWhereUniqueInput)
    delete?: Array<rebate_transactionsWhereUniqueInput>;

    @Field(() => [rebate_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => rebate_transactionsWhereUniqueInput)
    connect?: Array<rebate_transactionsWhereUniqueInput>;

    @Field(() => [rebate_transactionsUpdateWithWhereUniqueWithoutPlayerInput], {nullable:true})
    @Type(() => rebate_transactionsUpdateWithWhereUniqueWithoutPlayerInput)
    update?: Array<rebate_transactionsUpdateWithWhereUniqueWithoutPlayerInput>;

    @Field(() => [rebate_transactionsUpdateManyWithWhereWithoutPlayerInput], {nullable:true})
    @Type(() => rebate_transactionsUpdateManyWithWhereWithoutPlayerInput)
    updateMany?: Array<rebate_transactionsUpdateManyWithWhereWithoutPlayerInput>;

    @Field(() => [rebate_transactionsScalarWhereInput], {nullable:true})
    @Type(() => rebate_transactionsScalarWhereInput)
    deleteMany?: Array<rebate_transactionsScalarWhereInput>;
}
