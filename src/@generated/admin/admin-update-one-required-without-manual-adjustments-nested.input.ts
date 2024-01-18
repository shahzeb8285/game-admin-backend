import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateWithoutManual_adjustmentsInput } from './admin-create-without-manual-adjustments.input';
import { Type } from 'class-transformer';
import { AdminCreateOrConnectWithoutManual_adjustmentsInput } from './admin-create-or-connect-without-manual-adjustments.input';
import { AdminUpsertWithoutManual_adjustmentsInput } from './admin-upsert-without-manual-adjustments.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { AdminUpdateToOneWithWhereWithoutManual_adjustmentsInput } from './admin-update-to-one-with-where-without-manual-adjustments.input';

@InputType()
export class AdminUpdateOneRequiredWithoutManual_adjustmentsNestedInput {

    @Field(() => AdminCreateWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => AdminCreateWithoutManual_adjustmentsInput)
    create?: AdminCreateWithoutManual_adjustmentsInput;

    @Field(() => AdminCreateOrConnectWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => AdminCreateOrConnectWithoutManual_adjustmentsInput)
    connectOrCreate?: AdminCreateOrConnectWithoutManual_adjustmentsInput;

    @Field(() => AdminUpsertWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => AdminUpsertWithoutManual_adjustmentsInput)
    upsert?: AdminUpsertWithoutManual_adjustmentsInput;

    @Field(() => AdminWhereUniqueInput, {nullable:true})
    @Type(() => AdminWhereUniqueInput)
    connect?: AdminWhereUniqueInput;

    @Field(() => AdminUpdateToOneWithWhereWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => AdminUpdateToOneWithWhereWithoutManual_adjustmentsInput)
    update?: AdminUpdateToOneWithWhereWithoutManual_adjustmentsInput;
}
