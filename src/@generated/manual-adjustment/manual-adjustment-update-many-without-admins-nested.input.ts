import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManualAdjustmentCreateWithoutAdminsInput } from './manual-adjustment-create-without-admins.input';
import { Type } from 'class-transformer';
import { ManualAdjustmentCreateOrConnectWithoutAdminsInput } from './manual-adjustment-create-or-connect-without-admins.input';
import { ManualAdjustmentUpsertWithWhereUniqueWithoutAdminsInput } from './manual-adjustment-upsert-with-where-unique-without-admins.input';
import { ManualAdjustmentCreateManyAdminsInputEnvelope } from './manual-adjustment-create-many-admins-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ManualAdjustmentWhereUniqueInput } from './manual-adjustment-where-unique.input';
import { ManualAdjustmentUpdateWithWhereUniqueWithoutAdminsInput } from './manual-adjustment-update-with-where-unique-without-admins.input';
import { ManualAdjustmentUpdateManyWithWhereWithoutAdminsInput } from './manual-adjustment-update-many-with-where-without-admins.input';
import { ManualAdjustmentScalarWhereInput } from './manual-adjustment-scalar-where.input';

@InputType()
export class ManualAdjustmentUpdateManyWithoutAdminsNestedInput {

    @Field(() => [ManualAdjustmentCreateWithoutAdminsInput], {nullable:true})
    @Type(() => ManualAdjustmentCreateWithoutAdminsInput)
    create?: Array<ManualAdjustmentCreateWithoutAdminsInput>;

    @Field(() => [ManualAdjustmentCreateOrConnectWithoutAdminsInput], {nullable:true})
    @Type(() => ManualAdjustmentCreateOrConnectWithoutAdminsInput)
    connectOrCreate?: Array<ManualAdjustmentCreateOrConnectWithoutAdminsInput>;

    @Field(() => [ManualAdjustmentUpsertWithWhereUniqueWithoutAdminsInput], {nullable:true})
    @Type(() => ManualAdjustmentUpsertWithWhereUniqueWithoutAdminsInput)
    upsert?: Array<ManualAdjustmentUpsertWithWhereUniqueWithoutAdminsInput>;

    @Field(() => ManualAdjustmentCreateManyAdminsInputEnvelope, {nullable:true})
    @Type(() => ManualAdjustmentCreateManyAdminsInputEnvelope)
    createMany?: ManualAdjustmentCreateManyAdminsInputEnvelope;

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

    @Field(() => [ManualAdjustmentUpdateWithWhereUniqueWithoutAdminsInput], {nullable:true})
    @Type(() => ManualAdjustmentUpdateWithWhereUniqueWithoutAdminsInput)
    update?: Array<ManualAdjustmentUpdateWithWhereUniqueWithoutAdminsInput>;

    @Field(() => [ManualAdjustmentUpdateManyWithWhereWithoutAdminsInput], {nullable:true})
    @Type(() => ManualAdjustmentUpdateManyWithWhereWithoutAdminsInput)
    updateMany?: Array<ManualAdjustmentUpdateManyWithWhereWithoutAdminsInput>;

    @Field(() => [ManualAdjustmentScalarWhereInput], {nullable:true})
    @Type(() => ManualAdjustmentScalarWhereInput)
    deleteMany?: Array<ManualAdjustmentScalarWhereInput>;
}
