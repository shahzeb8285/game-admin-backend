import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsCreateWithoutManual_adjustmentsInput } from './admins-create-without-manual-adjustments.input';
import { Type } from 'class-transformer';
import { AdminsCreateOrConnectWithoutManual_adjustmentsInput } from './admins-create-or-connect-without-manual-adjustments.input';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';

@InputType()
export class AdminsCreateNestedOneWithoutManual_adjustmentsInput {

    @Field(() => AdminsCreateWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => AdminsCreateWithoutManual_adjustmentsInput)
    create?: AdminsCreateWithoutManual_adjustmentsInput;

    @Field(() => AdminsCreateOrConnectWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => AdminsCreateOrConnectWithoutManual_adjustmentsInput)
    connectOrCreate?: AdminsCreateOrConnectWithoutManual_adjustmentsInput;

    @Field(() => AdminsWhereUniqueInput, {nullable:true})
    @Type(() => AdminsWhereUniqueInput)
    connect?: AdminsWhereUniqueInput;
}
