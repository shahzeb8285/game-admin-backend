import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesCreateWithoutAdmin_rolesInput } from './admin-role-accesses-create-without-admin-roles.input';
import { Type } from 'class-transformer';
import { admin_role_accessesCreateOrConnectWithoutAdmin_rolesInput } from './admin-role-accesses-create-or-connect-without-admin-roles.input';
import { admin_role_accessesUpsertWithWhereUniqueWithoutAdmin_rolesInput } from './admin-role-accesses-upsert-with-where-unique-without-admin-roles.input';
import { admin_role_accessesCreateManyAdmin_rolesInputEnvelope } from './admin-role-accesses-create-many-admin-roles-input-envelope.input';
import { admin_role_accessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { admin_role_accessesUpdateWithWhereUniqueWithoutAdmin_rolesInput } from './admin-role-accesses-update-with-where-unique-without-admin-roles.input';
import { admin_role_accessesUpdateManyWithWhereWithoutAdmin_rolesInput } from './admin-role-accesses-update-many-with-where-without-admin-roles.input';
import { admin_role_accessesScalarWhereInput } from './admin-role-accesses-scalar-where.input';

@InputType()
export class admin_role_accessesUpdateManyWithoutAdmin_rolesNestedInput {

    @Field(() => [admin_role_accessesCreateWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => admin_role_accessesCreateWithoutAdmin_rolesInput)
    create?: Array<admin_role_accessesCreateWithoutAdmin_rolesInput>;

    @Field(() => [admin_role_accessesCreateOrConnectWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => admin_role_accessesCreateOrConnectWithoutAdmin_rolesInput)
    connectOrCreate?: Array<admin_role_accessesCreateOrConnectWithoutAdmin_rolesInput>;

    @Field(() => [admin_role_accessesUpsertWithWhereUniqueWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => admin_role_accessesUpsertWithWhereUniqueWithoutAdmin_rolesInput)
    upsert?: Array<admin_role_accessesUpsertWithWhereUniqueWithoutAdmin_rolesInput>;

    @Field(() => admin_role_accessesCreateManyAdmin_rolesInputEnvelope, {nullable:true})
    @Type(() => admin_role_accessesCreateManyAdmin_rolesInputEnvelope)
    createMany?: admin_role_accessesCreateManyAdmin_rolesInputEnvelope;

    @Field(() => [admin_role_accessesWhereUniqueInput], {nullable:true})
    @Type(() => admin_role_accessesWhereUniqueInput)
    set?: Array<admin_role_accessesWhereUniqueInput>;

    @Field(() => [admin_role_accessesWhereUniqueInput], {nullable:true})
    @Type(() => admin_role_accessesWhereUniqueInput)
    disconnect?: Array<admin_role_accessesWhereUniqueInput>;

    @Field(() => [admin_role_accessesWhereUniqueInput], {nullable:true})
    @Type(() => admin_role_accessesWhereUniqueInput)
    delete?: Array<admin_role_accessesWhereUniqueInput>;

    @Field(() => [admin_role_accessesWhereUniqueInput], {nullable:true})
    @Type(() => admin_role_accessesWhereUniqueInput)
    connect?: Array<admin_role_accessesWhereUniqueInput>;

    @Field(() => [admin_role_accessesUpdateWithWhereUniqueWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => admin_role_accessesUpdateWithWhereUniqueWithoutAdmin_rolesInput)
    update?: Array<admin_role_accessesUpdateWithWhereUniqueWithoutAdmin_rolesInput>;

    @Field(() => [admin_role_accessesUpdateManyWithWhereWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => admin_role_accessesUpdateManyWithWhereWithoutAdmin_rolesInput)
    updateMany?: Array<admin_role_accessesUpdateManyWithWhereWithoutAdmin_rolesInput>;

    @Field(() => [admin_role_accessesScalarWhereInput], {nullable:true})
    @Type(() => admin_role_accessesScalarWhereInput)
    deleteMany?: Array<admin_role_accessesScalarWhereInput>;
}
