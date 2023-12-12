import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsCreateWithoutAdmin_rolesInput } from './admins-create-without-admin-roles.input';
import { Type } from 'class-transformer';
import { adminsCreateOrConnectWithoutAdmin_rolesInput } from './admins-create-or-connect-without-admin-roles.input';
import { adminsCreateManyAdmin_rolesInputEnvelope } from './admins-create-many-admin-roles-input-envelope.input';
import { Prisma } from '@prisma/client';
import { adminsWhereUniqueInput } from './admins-where-unique.input';

@InputType()
export class adminsUncheckedCreateNestedManyWithoutAdmin_rolesInput {

    @Field(() => [adminsCreateWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => adminsCreateWithoutAdmin_rolesInput)
    create?: Array<adminsCreateWithoutAdmin_rolesInput>;

    @Field(() => [adminsCreateOrConnectWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => adminsCreateOrConnectWithoutAdmin_rolesInput)
    connectOrCreate?: Array<adminsCreateOrConnectWithoutAdmin_rolesInput>;

    @Field(() => adminsCreateManyAdmin_rolesInputEnvelope, {nullable:true})
    @Type(() => adminsCreateManyAdmin_rolesInputEnvelope)
    createMany?: adminsCreateManyAdmin_rolesInputEnvelope;

    @Field(() => [adminsWhereUniqueInput], {nullable:true})
    @Type(() => adminsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<adminsWhereUniqueInput, 'admin_id' | 'admin_name'>>;
}
