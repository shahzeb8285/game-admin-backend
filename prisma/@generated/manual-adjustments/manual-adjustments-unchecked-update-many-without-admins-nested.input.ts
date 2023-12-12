import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manual_adjustmentsCreateWithoutAdminsInput } from './manual-adjustments-create-without-admins.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsCreateOrConnectWithoutAdminsInput } from './manual-adjustments-create-or-connect-without-admins.input';
import { manual_adjustmentsUpsertWithWhereUniqueWithoutAdminsInput } from './manual-adjustments-upsert-with-where-unique-without-admins.input';
import { manual_adjustmentsCreateManyAdminsInputEnvelope } from './manual-adjustments-create-many-admins-input-envelope.input';
import { Prisma } from '@prisma/client';
import { manual_adjustmentsWhereUniqueInput } from './manual-adjustments-where-unique.input';
import { manual_adjustmentsUpdateWithWhereUniqueWithoutAdminsInput } from './manual-adjustments-update-with-where-unique-without-admins.input';
import { manual_adjustmentsUpdateManyWithWhereWithoutAdminsInput } from './manual-adjustments-update-many-with-where-without-admins.input';
import { manual_adjustmentsScalarWhereInput } from './manual-adjustments-scalar-where.input';

@InputType()
export class manual_adjustmentsUncheckedUpdateManyWithoutAdminsNestedInput {

    @Field(() => [manual_adjustmentsCreateWithoutAdminsInput], {nullable:true})
    @Type(() => manual_adjustmentsCreateWithoutAdminsInput)
    create?: Array<manual_adjustmentsCreateWithoutAdminsInput>;

    @Field(() => [manual_adjustmentsCreateOrConnectWithoutAdminsInput], {nullable:true})
    @Type(() => manual_adjustmentsCreateOrConnectWithoutAdminsInput)
    connectOrCreate?: Array<manual_adjustmentsCreateOrConnectWithoutAdminsInput>;

    @Field(() => [manual_adjustmentsUpsertWithWhereUniqueWithoutAdminsInput], {nullable:true})
    @Type(() => manual_adjustmentsUpsertWithWhereUniqueWithoutAdminsInput)
    upsert?: Array<manual_adjustmentsUpsertWithWhereUniqueWithoutAdminsInput>;

    @Field(() => manual_adjustmentsCreateManyAdminsInputEnvelope, {nullable:true})
    @Type(() => manual_adjustmentsCreateManyAdminsInputEnvelope)
    createMany?: manual_adjustmentsCreateManyAdminsInputEnvelope;

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

    @Field(() => [manual_adjustmentsUpdateWithWhereUniqueWithoutAdminsInput], {nullable:true})
    @Type(() => manual_adjustmentsUpdateWithWhereUniqueWithoutAdminsInput)
    update?: Array<manual_adjustmentsUpdateWithWhereUniqueWithoutAdminsInput>;

    @Field(() => [manual_adjustmentsUpdateManyWithWhereWithoutAdminsInput], {nullable:true})
    @Type(() => manual_adjustmentsUpdateManyWithWhereWithoutAdminsInput)
    updateMany?: Array<manual_adjustmentsUpdateManyWithWhereWithoutAdminsInput>;

    @Field(() => [manual_adjustmentsScalarWhereInput], {nullable:true})
    @Type(() => manual_adjustmentsScalarWhereInput)
    deleteMany?: Array<manual_adjustmentsScalarWhereInput>;
}
