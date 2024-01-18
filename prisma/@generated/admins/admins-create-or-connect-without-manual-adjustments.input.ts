import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { AdminsCreateWithoutManual_adjustmentsInput } from './admins-create-without-manual-adjustments.input';

@InputType()
export class AdminsCreateOrConnectWithoutManual_adjustmentsInput {

    @Field(() => AdminsWhereUniqueInput, {nullable:false})
    @Type(() => AdminsWhereUniqueInput)
    where!: AdminsWhereUniqueInput;

    @Field(() => AdminsCreateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => AdminsCreateWithoutManual_adjustmentsInput)
    create!: AdminsCreateWithoutManual_adjustmentsInput;
}
