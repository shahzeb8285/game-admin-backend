import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsWhereInput } from './admins-where.input';
import { Type } from 'class-transformer';
import { adminsUpdateWithoutManual_adjustmentsInput } from './admins-update-without-manual-adjustments.input';

@InputType()
export class adminsUpdateToOneWithWhereWithoutManual_adjustmentsInput {

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;

    @Field(() => adminsUpdateWithoutManual_adjustmentsInput, {nullable:false})
    @Type(() => adminsUpdateWithoutManual_adjustmentsInput)
    data!: adminsUpdateWithoutManual_adjustmentsInput;
}
