import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminUpdateWithoutManual_adjustmentsInput } from './admin-update-without-manual-adjustments.input';
import { Type } from 'class-transformer';
import { AdminCreateWithoutManual_adjustmentsInput } from './admin-create-without-manual-adjustments.input';
import { AdminWhereInput } from './admin-where.input';

@InputType()
export class AdminUpsertWithoutManual_adjustmentsInput {

    @Field(() => AdminUpdateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => AdminUpdateWithoutManual_adjustmentsInput)
    update!: AdminUpdateWithoutManual_adjustmentsInput;

    @Field(() => AdminCreateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => AdminCreateWithoutManual_adjustmentsInput)
    create!: AdminCreateWithoutManual_adjustmentsInput;

    @Field(() => AdminWhereInput, {nullable:true})
    @Type(() => AdminWhereInput)
    where?: AdminWhereInput;
}
