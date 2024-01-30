import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsCreateWithoutManual_adjustmentsInput } from './admins-create-without-manual-adjustments.input';
import { Type } from 'class-transformer';
import { adminsCreateOrConnectWithoutManual_adjustmentsInput } from './admins-create-or-connect-without-manual-adjustments.input';
import { adminsUpsertWithoutManual_adjustmentsInput } from './admins-upsert-without-manual-adjustments.input';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { adminsUpdateToOneWithWhereWithoutManual_adjustmentsInput } from './admins-update-to-one-with-where-without-manual-adjustments.input';

@InputType()
export class adminsUpdateOneRequiredWithoutManual_adjustmentsNestedInput {

    @Field(() => adminsCreateWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => adminsCreateWithoutManual_adjustmentsInput)
    create?: adminsCreateWithoutManual_adjustmentsInput;

    @Field(() => adminsCreateOrConnectWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => adminsCreateOrConnectWithoutManual_adjustmentsInput)
    connectOrCreate?: adminsCreateOrConnectWithoutManual_adjustmentsInput;

    @Field(() => adminsUpsertWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => adminsUpsertWithoutManual_adjustmentsInput)
    upsert?: adminsUpsertWithoutManual_adjustmentsInput;

    @Field(() => adminsWhereUniqueInput, {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    connect?: adminsWhereUniqueInput;

    @Field(() => adminsUpdateToOneWithWhereWithoutManual_adjustmentsInput, {nullable:true})
    @Type(() => adminsUpdateToOneWithWhereWithoutManual_adjustmentsInput)
    update?: adminsUpdateToOneWithWhereWithoutManual_adjustmentsInput;
}
