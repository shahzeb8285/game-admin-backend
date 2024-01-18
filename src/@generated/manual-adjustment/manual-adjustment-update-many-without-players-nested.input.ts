import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManualAdjustmentCreateWithoutPlayersInput } from './manual-adjustment-create-without-players.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentCreateOrConnectWithoutPlayersInput } from './manual-adjustment-create-or-connect-without-players.input';
import { ManualAdjustmentUpsertWithWhereUniqueWithoutPlayersInput } from './manual-adjustment-upsert-with-where-unique-without-players.input';
import { ManualAdjustmentCreateManyPlayersInputEnvelope } from './manual-adjustment-create-many-players-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ManualAdjustmentWhereUniqueInput } from './manual-adjustment-where-unique.input';
import { ManualAdjustmentUpdateWithWhereUniqueWithoutPlayersInput } from './manual-adjustment-update-with-where-unique-without-players.input';
import { ManualAdjustmentUpdateManyWithWhereWithoutPlayersInput } from './manual-adjustment-update-many-with-where-without-players.input';
import { ManualAdjustmentScalarWhereInput } from './manual-adjustment-scalar-where.input';

@InputType()
export class ManualAdjustmentUpdateManyWithoutPlayersNestedInput {

    @Field(() => [ManualAdjustmentCreateWithoutPlayersInput], {nullable:true})
    @Type(() => ManualAdjustmentCreateWithoutPlayersInput)
    create?: Array<ManualAdjustmentCreateWithoutPlayersInput>;

    @Field(() => [ManualAdjustmentCreateOrConnectWithoutPlayersInput], {nullable:true})
    @Type(() => ManualAdjustmentCreateOrConnectWithoutPlayersInput)
    connectOrCreate?: Array<ManualAdjustmentCreateOrConnectWithoutPlayersInput>;

    @Field(() => [ManualAdjustmentUpsertWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => ManualAdjustmentUpsertWithWhereUniqueWithoutPlayersInput)
    upsert?: Array<ManualAdjustmentUpsertWithWhereUniqueWithoutPlayersInput>;

    @Field(() => ManualAdjustmentCreateManyPlayersInputEnvelope, {nullable:true})
    @Type(() => ManualAdjustmentCreateManyPlayersInputEnvelope)
    createMany?: ManualAdjustmentCreateManyPlayersInputEnvelope;

    @Field(() => [ManualAdjustmentWhereUniqueInput], {nullable:true})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ManualAdjustmentWhereUniqueInput, 'manual_adjustment_id'>>;

    @Field(() => [ManualAdjustmentWhereUniqueInput], {nullable:true})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ManualAdjustmentWhereUniqueInput, 'manual_adjustment_id'>>;

    @Field(() => [ManualAdjustmentWhereUniqueInput], {nullable:true})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ManualAdjustmentWhereUniqueInput, 'manual_adjustment_id'>>;

    @Field(() => [ManualAdjustmentWhereUniqueInput], {nullable:true})
    @Type(() => ManualAdjustmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ManualAdjustmentWhereUniqueInput, 'manual_adjustment_id'>>;

    @Field(() => [ManualAdjustmentUpdateWithWhereUniqueWithoutPlayersInput], {nullable:true})
    @Type(() => ManualAdjustmentUpdateWithWhereUniqueWithoutPlayersInput)
    update?: Array<ManualAdjustmentUpdateWithWhereUniqueWithoutPlayersInput>;

    @Field(() => [ManualAdjustmentUpdateManyWithWhereWithoutPlayersInput], {nullable:true})
    @Type(() => ManualAdjustmentUpdateManyWithWhereWithoutPlayersInput)
    updateMany?: Array<ManualAdjustmentUpdateManyWithWhereWithoutPlayersInput>;

    @Field(() => [ManualAdjustmentScalarWhereInput], {nullable:true})
    @Type(() => ManualAdjustmentScalarWhereInput)
    deleteMany?: Array<ManualAdjustmentScalarWhereInput>;
}
