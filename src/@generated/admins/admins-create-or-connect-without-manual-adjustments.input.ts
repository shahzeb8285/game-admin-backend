import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { Type } from 'class-transformer';
import { adminsCreateWithoutManual_adjustmentsInput } from './admins-create-without-manual-adjustments.input';

@InputType()
export class adminsCreateOrConnectWithoutManual_adjustmentsInput {

    @Field(() => adminsWhereUniqueInput, {nullable:false})
    @Type(() => adminsWhereUniqueInput)
    where!: adminsWhereUniqueInput;

    @Field(() => adminsCreateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => adminsCreateWithoutManual_adjustmentsInput)
    create!: adminsCreateWithoutManual_adjustmentsInput;
}
