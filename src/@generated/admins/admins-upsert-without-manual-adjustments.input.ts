import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsUpdateWithoutManual_adjustmentsInput } from './admins-update-without-manual-adjustments.input';
import { Type } from 'class-transformer';
import { adminsCreateWithoutManual_adjustmentsInput } from './admins-create-without-manual-adjustments.input';
import { adminsWhereInput } from './admins-where.input';

@InputType()
export class adminsUpsertWithoutManual_adjustmentsInput {

    @Field(() => adminsUpdateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => adminsUpdateWithoutManual_adjustmentsInput)
    update!: adminsUpdateWithoutManual_adjustmentsInput;

    @Field(() => adminsCreateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => adminsCreateWithoutManual_adjustmentsInput)
    create!: adminsCreateWithoutManual_adjustmentsInput;

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;
}
