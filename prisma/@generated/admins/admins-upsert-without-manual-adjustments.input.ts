import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsUpdateWithoutManual_adjustmentsInput } from './admins-update-without-manual-adjustments.input';
import { Type } from 'class-transformer';
import { AdminsCreateWithoutManual_adjustmentsInput } from './admins-create-without-manual-adjustments.input';
import { AdminsWhereInput } from './admins-where.input';

@InputType()
export class AdminsUpsertWithoutManual_adjustmentsInput {

    @Field(() => AdminsUpdateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => AdminsUpdateWithoutManual_adjustmentsInput)
    update!: AdminsUpdateWithoutManual_adjustmentsInput;

    @Field(() => AdminsCreateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => AdminsCreateWithoutManual_adjustmentsInput)
    create!: AdminsCreateWithoutManual_adjustmentsInput;

    @Field(() => AdminsWhereInput, {nullable:true})
    @Type(() => AdminsWhereInput)
    where?: AdminsWhereInput;
}
