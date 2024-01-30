import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsCreateWithoutAdmin_rolesInput } from './admins-create-without-admin-roles.input';
import { Type } from 'class-transformer';
import { adminsCreateOrConnectWithoutAdmin_rolesInput } from './admins-create-or-connect-without-admin-roles.input';
import { adminsUpsertWithWhereUniqueWithoutAdmin_rolesInput } from './admins-upsert-with-where-unique-without-admin-roles.input';
import { adminsCreateManyAdmin_rolesInputEnvelope } from './admins-create-many-admin-roles-input-envelope.input';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { adminsUpdateWithWhereUniqueWithoutAdmin_rolesInput } from './admins-update-with-where-unique-without-admin-roles.input';
import { adminsUpdateManyWithWhereWithoutAdmin_rolesInput } from './admins-update-many-with-where-without-admin-roles.input';
import { adminsScalarWhereInput } from './admins-scalar-where.input';

@InputType()
export class adminsUpdateManyWithoutAdmin_rolesNestedInput {

    @Field(() => [adminsCreateWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => adminsCreateWithoutAdmin_rolesInput)
    create?: Array<adminsCreateWithoutAdmin_rolesInput>;

    @Field(() => [adminsCreateOrConnectWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => adminsCreateOrConnectWithoutAdmin_rolesInput)
    connectOrCreate?: Array<adminsCreateOrConnectWithoutAdmin_rolesInput>;

    @Field(() => [adminsUpsertWithWhereUniqueWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => adminsUpsertWithWhereUniqueWithoutAdmin_rolesInput)
    upsert?: Array<adminsUpsertWithWhereUniqueWithoutAdmin_rolesInput>;

    @Field(() => adminsCreateManyAdmin_rolesInputEnvelope, {nullable:true})
    @Type(() => adminsCreateManyAdmin_rolesInputEnvelope)
    createMany?: adminsCreateManyAdmin_rolesInputEnvelope;

    @Field(() => [adminsWhereUniqueInput], {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    set?: Array<adminsWhereUniqueInput>;

    @Field(() => [adminsWhereUniqueInput], {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    disconnect?: Array<adminsWhereUniqueInput>;

    @Field(() => [adminsWhereUniqueInput], {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    delete?: Array<adminsWhereUniqueInput>;

    @Field(() => [adminsWhereUniqueInput], {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    connect?: Array<adminsWhereUniqueInput>;

    @Field(() => [adminsUpdateWithWhereUniqueWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => adminsUpdateWithWhereUniqueWithoutAdmin_rolesInput)
    update?: Array<adminsUpdateWithWhereUniqueWithoutAdmin_rolesInput>;

    @Field(() => [adminsUpdateManyWithWhereWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => adminsUpdateManyWithWhereWithoutAdmin_rolesInput)
    updateMany?: Array<adminsUpdateManyWithWhereWithoutAdmin_rolesInput>;

    @Field(() => [adminsScalarWhereInput], {nullable:true})
    @Type(() => adminsScalarWhereInput)
    deleteMany?: Array<adminsScalarWhereInput>;
}
