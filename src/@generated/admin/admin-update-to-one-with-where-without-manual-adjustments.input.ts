import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminWhereInput } from './admin-where.input';
import { Type } from 'class-transformer';
import { AdminUpdateWithoutManual_adjustmentsInput } from './admin-update-without-manual-adjustments.input';

@InputType()
export class AdminUpdateToOneWithWhereWithoutManual_adjustmentsInput {

    @Field(() => AdminWhereInput, {nullable:true})
    @Type(() => AdminWhereInput)
    where?: AdminWhereInput;

    @Field(() => AdminUpdateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => AdminUpdateWithoutManual_adjustmentsInput)
    data!: AdminUpdateWithoutManual_adjustmentsInput;
}
