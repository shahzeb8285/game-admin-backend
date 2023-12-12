import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manual_adjustmentsCreateWithoutAdminsInput } from './manual-adjustments-create-without-admins.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsCreateOrConnectWithoutAdminsInput } from './manual-adjustments-create-or-connect-without-admins.input';
import { manual_adjustmentsCreateManyAdminsInputEnvelope } from './manual-adjustments-create-many-admins-input-envelope.input';
import { Prisma } from '@prisma/client';
import { manual_adjustmentsWhereUniqueInput } from './manual-adjustments-where-unique.input';

@InputType()
export class manual_adjustmentsCreateNestedManyWithoutAdminsInput {

    @Field(() => [manual_adjustmentsCreateWithoutAdminsInput], {nullable:true})
    @Type(() => manual_adjustmentsCreateWithoutAdminsInput)
    create?: Array<manual_adjustmentsCreateWithoutAdminsInput>;

    @Field(() => [manual_adjustmentsCreateOrConnectWithoutAdminsInput], {nullable:true})
    @Type(() => manual_adjustmentsCreateOrConnectWithoutAdminsInput)
    connectOrCreate?: Array<manual_adjustmentsCreateOrConnectWithoutAdminsInput>;

    @Field(() => manual_adjustmentsCreateManyAdminsInputEnvelope, {nullable:true})
    @Type(() => manual_adjustmentsCreateManyAdminsInputEnvelope)
    createMany?: manual_adjustmentsCreateManyAdminsInputEnvelope;

    @Field(() => [manual_adjustmentsWhereUniqueInput], {nullable:true})
    @Type(() => manual_adjustmentsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<manual_adjustmentsWhereUniqueInput, 'manual_adjustment_id'>>;
}
