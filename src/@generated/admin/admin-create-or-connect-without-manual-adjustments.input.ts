import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { Type } from 'class-transformer';
import { AdminCreateWithoutManual_adjustmentsInput } from './admin-create-without-manual-adjustments.input';

@InputType()
export class AdminCreateOrConnectWithoutManual_adjustmentsInput {

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    @Type(() => AdminWhereUniqueInput)
    where!: Prisma.AtLeast<AdminWhereUniqueInput, 'admin_id' | 'admin_name'>;

    @Field(() => AdminCreateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => AdminCreateWithoutManual_adjustmentsInput)
    create!: AdminCreateWithoutManual_adjustmentsInput;
}
