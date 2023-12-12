import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { manual_adjustmentsWhereUniqueInput } from './manual-adjustments-where-unique.input';
import { Type } from 'class-transformer';
import { manual_adjustmentsUpdateWithoutAdminsInput } from './manual-adjustments-update-without-admins.input';
import { manual_adjustmentsCreateWithoutAdminsInput } from './manual-adjustments-create-without-admins.input';

@InputType()
export class manual_adjustmentsUpsertWithWhereUniqueWithoutAdminsInput {

    @Field(() => manual_adjustmentsWhereUniqueInput, {nullable:false})
    @Type(() => manual_adjustmentsWhereUniqueInput)
    where!: Prisma.AtLeast<manual_adjustmentsWhereUniqueInput, 'manual_adjustment_id'>;

    @Field(() => manual_adjustmentsUpdateWithoutAdminsInput, {nullable:false})
    @Type(() => manual_adjustmentsUpdateWithoutAdminsInput)
    update!: manual_adjustmentsUpdateWithoutAdminsInput;

    @Field(() => manual_adjustmentsCreateWithoutAdminsInput, {nullable:false})
    @Type(() => manual_adjustmentsCreateWithoutAdminsInput)
    create!: manual_adjustmentsCreateWithoutAdminsInput;
}
