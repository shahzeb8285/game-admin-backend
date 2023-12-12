import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manual_adjustmentsCreateWithoutPlayersInput } from './manual-adjustments-create-without-players.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsCreateOrConnectWithoutPlayersInput } from './manual-adjustments-create-or-connect-without-players.input';
import { manual_adjustmentsUpsertWithWhereUniqueWithoutPlayersInput } from './manual-adjustments-upsert-with-where-unique-without-players.input';
import { manual_adjustmentsCreateManyPlayersInputEnvelope } from './manual-adjustments-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { manual_adjustmentsWhereUniqueInput } from './manual-adjustments-where-unique.input';
import { manual_adjustmentsUpdateWithWhereUniqueWithoutPlayersInput } from './manual-adjustments-update-with-where-unique-without-players.input';
import { manual_adjustmentsUpdateManyWithWhereWithoutPlayersInput } from './manual-adjustments-update-many-with-where-without-players.input';
import { manual_adjustmentsScalarWhereInput } from './manual-adjustments-scalar-where.input';

@InputType()
export class manual_adjustmentsUncheckedUpdateManyWithoutPlayersNestedInput {

    @Field(() => [manual_adjustmentsCreateWithoutPlayersInput], {nullable:true})
    @Type(() => manual_adjustmentsCreateWithoutPlayersInput)
    create?: Array<manual_adjustmentsCreateWithoutPlayersInput>;

    @Field(() => [manual_adjustmentsCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => manual_adjustmentsCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<manual_adjustmentsCreateOrConnectWithoutPlayersInput>;

    @Field(() => [manual_adjustmentsUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => manual_adjustmentsUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<manual_adjustmentsUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => manual_adjustmentsCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => manual_adjustmentsCreateManyPlayersInputEnvelope)
    createMany?: manual_adjustmentsCreateManyPlayersInputEnvelope;

    @Field(() => [manual_adjustmentsWhereUniqueInput], {nullable:true})
    @Type(() => manual_adjustmentsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<manual_adjustmentsWhereUniqueInput, 'manual_adjustment_id'>>;

    @Field(() => [manual_adjustmentsWhereUniqueInput], {nullable:true})
    @Type(() => manual_adjustmentsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<manual_adjustmentsWhereUniqueInput, 'manual_adjustment_id'>>;

    @Field(() => [manual_adjustmentsWhereUniqueInput], {nullable:true})
    @Type(() => manual_adjustmentsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<manual_adjustmentsWhereUniqueInput, 'manual_adjustment_id'>>;

    @Field(() => [manual_adjustmentsWhereUniqueInput], {nullable:true})
    @Type(() => manual_adjustmentsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<manual_adjustmentsWhereUniqueInput, 'manual_adjustment_id'>>;

    @Field(() => [manual_adjustmentsUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => manual_adjustmentsUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<manual_adjustmentsUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [manual_adjustmentsUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => manual_adjustmentsUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<manual_adjustmentsUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [manual_adjustmentsScalarWhereInput], {nullable:true})
    @Type(() => manual_adjustmentsScalarWhereInput)
    deleteMany?: Array<manual_adjustmentsScalarWhereInput>;
}
