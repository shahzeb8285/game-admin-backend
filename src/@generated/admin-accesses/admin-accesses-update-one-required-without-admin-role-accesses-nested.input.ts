import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_accessesCreateWithoutAdmin_role_accessesInput } from './admin-accesses-create-without-admin-role-accesses.input';
import { Type } from 'class-transformer';
import { admin_accessesCreateOrConnectWithoutAdmin_role_accessesInput } from './admin-accesses-create-or-connect-without-admin-role-accesses.input';
import { admin_accessesUpsertWithoutAdmin_role_accessesInput } from './admin-accesses-upsert-without-admin-role-accesses.input';
import { admin_accessesWhereUniqueInput } from './admin-accesses-where-unique.input';
import { admin_accessesUpdateToOneWithWhereWithoutAdmin_role_accessesInput } from './admin-accesses-update-to-one-with-where-without-admin-role-accesses.input';

@InputType()
export class admin_accessesUpdateOneRequiredWithoutAdmin_role_accessesNestedInput {

    @Field(() => admin_accessesCreateWithoutAdmin_role_accessesInput, {nullable:true})
    @Type(() => admin_accessesCreateWithoutAdmin_role_accessesInput)
    create?: admin_accessesCreateWithoutAdmin_role_accessesInput;

    @Field(() => admin_accessesCreateOrConnectWithoutAdmin_role_accessesInput, {nullable:true})
    @Type(() => admin_accessesCreateOrConnectWithoutAdmin_role_accessesInput)
    connectOrCreate?: admin_accessesCreateOrConnectWithoutAdmin_role_accessesInput;

    @Field(() => admin_accessesUpsertWithoutAdmin_role_accessesInput, {nullable:true})
    @Type(() => admin_accessesUpsertWithoutAdmin_role_accessesInput)
    upsert?: admin_accessesUpsertWithoutAdmin_role_accessesInput;

    @Field(() => admin_accessesWhereUniqueInput, {nullable:true})
    @Type(() => admin_accessesWhereUniqueInput)
    connect?: admin_accessesWhereUniqueInput;

    @Field(() => admin_accessesUpdateToOneWithWhereWithoutAdmin_role_accessesInput, {nullable:true})
    @Type(() => admin_accessesUpdateToOneWithWhereWithoutAdmin_role_accessesInput)
    update?: admin_accessesUpdateToOneWithWhereWithoutAdmin_role_accessesInput;
}
