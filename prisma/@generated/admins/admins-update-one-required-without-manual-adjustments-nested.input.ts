import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsCreateWithoutManual_adjustmentsInput } from './admins-create-without-manual-adjustments.input';
import { Type } from 'class-transformer';
import { AdminsCreateOrConnectWithoutManual_adjustmentsInput } from './admins-create-or-connect-without-manual-adjustments.input';
import { AdminsUpsertWithoutManual_adjustmentsInput } from './admins-upsert-without-manual-adjustments.input';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';
import { AdminsUpdateToOneWithWhereWithoutManual_adjustmentsInput } from './admins-update-to-one-with-where-without-manual-adjustments.input';

@InputType()
export class AdminsUpdateOneRequiredWithoutManual_adjustmentsNestedInput {

    @Field(() => AdminsCreateWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => AdminsCreateWithoutManual_adjustmentsInput)
    create?: AdminsCreateWithoutManual_adjustmentsInput;

    @Field(() => AdminsCreateOrConnectWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => AdminsCreateOrConnectWithoutManual_adjustmentsInput)
    connectOrCreate?: AdminsCreateOrConnectWithoutManual_adjustmentsInput;

    @Field(() => AdminsUpsertWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => AdminsUpsertWithoutManual_adjustmentsInput)
    upsert?: AdminsUpsertWithoutManual_adjustmentsInput;

    @Field(() => AdminsWhereUniqueInput, {nullable:true})
    @Type(() => AdminsWhereUniqueInput)
    connect?: AdminsWhereUniqueInput;

    @Field(() => AdminsUpdateToOneWithWhereWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => AdminsUpdateToOneWithWhereWithoutManual_adjustmentsInput)
    update?: AdminsUpdateToOneWithWhereWithoutManual_adjustmentsInput;
}
