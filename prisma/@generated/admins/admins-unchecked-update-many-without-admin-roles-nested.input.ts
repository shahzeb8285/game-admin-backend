import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsCreateWithoutAdmin_rolesInput } from './admins-create-without-admin-roles.input';
import { Type } from 'class-transformer';
import { AdminsCreateOrConnectWithoutAdmin_rolesInput } from './admins-create-or-connect-without-admin-roles.input';
import { AdminsUpsertWithWhereUniqueWithoutAdmin_rolesInput } from './admins-upsert-with-where-unique-without-admin-roles.input';
import { AdminsCreateManyAdmin_rolesInputEnvelope } from './admins-create-many-admin-roles-input-envelope.input';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';
import { AdminsUpdateWithWhereUniqueWithoutAdmin_rolesInput } from './admins-update-with-where-unique-without-admin-roles.input';
import { AdminsUpdateManyWithWhereWithoutAdmin_rolesInput } from './admins-update-many-with-where-without-admin-roles.input';
import { AdminsScalarWhereInput } from './admins-scalar-where.input';

@InputType()
export class AdminsUncheckedUpdateManyWithoutAdmin_rolesNestedInput {

    @Field(() => [AdminsCreateWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminsCreateWithoutAdmin_rolesInput)
    create?: Array<AdminsCreateWithoutAdmin_rolesInput>;

    @Field(() => [AdminsCreateOrConnectWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminsCreateOrConnectWithoutAdmin_rolesInput)
    connectOrCreate?: Array<AdminsCreateOrConnectWithoutAdmin_rolesInput>;

    @Field(() => [AdminsUpsertWithWhereUniqueWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminsUpsertWithWhereUniqueWithoutAdmin_rolesInput)
    upsert?: Array<AdminsUpsertWithWhereUniqueWithoutAdmin_rolesInput>;

    @Field(() => AdminsCreateManyAdmin_rolesInputEnvelope, {nullable:true})
    @Type(() => AdminsCreateManyAdmin_rolesInputEnvelope)
    createMany?: AdminsCreateManyAdmin_rolesInputEnvelope;

    @Field(() => [AdminsWhereUniqueInput], {nullable:true})
    @Type(() => AdminsWhereUniqueInput)
    set?: Array<AdminsWhereUniqueInput>;

    @Field(() => [AdminsWhereUniqueInput], {nullable:true})
    @Type(() => AdminsWhereUniqueInput)
    disconnect?: Array<AdminsWhereUniqueInput>;

    @Field(() => [AdminsWhereUniqueInput], {nullable:true})
    @Type(() => AdminsWhereUniqueInput)
    delete?: Array<AdminsWhereUniqueInput>;

    @Field(() => [AdminsWhereUniqueInput], {nullable:true})
    @Type(() => AdminsWhereUniqueInput)
    connect?: Array<AdminsWhereUniqueInput>;

    @Field(() => [AdminsUpdateWithWhereUniqueWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminsUpdateWithWhereUniqueWithoutAdmin_rolesInput)
    update?: Array<AdminsUpdateWithWhereUniqueWithoutAdmin_rolesInput>;

    @Field(() => [AdminsUpdateManyWithWhereWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminsUpdateManyWithWhereWithoutAdmin_rolesInput)
    updateMany?: Array<AdminsUpdateManyWithWhereWithoutAdmin_rolesInput>;

    @Field(() => [AdminsScalarWhereInput], {nullable:true})
    @Type(() => AdminsScalarWhereInput)
    deleteMany?: Array<AdminsScalarWhereInput>;
}
