import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsWhereInput } from './admins-where.input';
import { Type } from 'class-transformer';
import { AdminsUpdateWithoutManual_adjustmentsInput } from './admins-update-without-manual-adjustments.input';

@InputType()
export class AdminsUpdateToOneWithWhereWithoutManual_adjustmentsInput {

    @Field(() => AdminsWhereInput, {nullable:true})
    @Type(() => AdminsWhereInput)
    where?: AdminsWhereInput;

    @Field(() => AdminsUpdateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => AdminsUpdateWithoutManual_adjustmentsInput)
    data!: AdminsUpdateWithoutManual_adjustmentsInput;
}
