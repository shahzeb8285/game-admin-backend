import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateWithoutManual_adjustmentsInput } from './admin-create-without-manual-adjustments.input';
import { Type } from 'class-transformer';
import { AdminCreateOrConnectWithoutManual_adjustmentsInput } from './admin-create-or-connect-without-manual-adjustments.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';

@InputType()
export class AdminCreateNestedOneWithoutManual_adjustmentsInput {

    @Field(() => AdminCreateWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => AdminCreateWithoutManual_adjustmentsInput)
    create?: AdminCreateWithoutManual_adjustmentsInput;

    @Field(() => AdminCreateOrConnectWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => AdminCreateOrConnectWithoutManual_adjustmentsInput)
    connectOrCreate?: AdminCreateOrConnectWithoutManual_adjustmentsInput;

    @Field(() => AdminWhereUniqueInput, {nullable:true})
    @Type(() => AdminWhereUniqueInput)
    connect?: AdminWhereUniqueInput;
}
