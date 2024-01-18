import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { Type } from 'class-transformer';
import { AdminCreateWithoutManual_adjustmentsInput } from './admin-create-without-manual-adjustments.input';

@InputType()
export class AdminCreateOrConnectWithoutManual_adjustmentsInput {

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    @Type(() => AdminWhereUniqueInput)
    where!: AdminWhereUniqueInput;

    @Field(() => AdminCreateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => AdminCreateWithoutManual_adjustmentsInput)
    create!: AdminCreateWithoutManual_adjustmentsInput;
}
