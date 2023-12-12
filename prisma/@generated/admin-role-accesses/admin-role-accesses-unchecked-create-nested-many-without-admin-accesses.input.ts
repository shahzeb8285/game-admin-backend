import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesCreateWithoutAdmin_accessesInput } from './admin-role-accesses-create-without-admin-accesses.input';
import { Type } from 'class-transformer';
import { admin_role_accessesCreateOrConnectWithoutAdmin_accessesInput } from './admin-role-accesses-create-or-connect-without-admin-accesses.input';
import { admin_role_accessesCreateManyAdmin_accessesInputEnvelope } from './admin-role-accesses-create-many-admin-accesses-input-envelope.input';
import { Prisma } from '@prisma/client';
import { admin_role_accessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';

@InputType()
export class admin_role_accessesUncheckedCreateNestedManyWithoutAdmin_accessesInput {

    @Field(() => [admin_role_accessesCreateWithoutAdmin_accessesInput], {nullable:true})
    @Type(() => admin_role_accessesCreateWithoutAdmin_accessesInput)
    create?: Array<admin_role_accessesCreateWithoutAdmin_accessesInput>;

    @Field(() => [admin_role_accessesCreateOrConnectWithoutAdmin_accessesInput], {nullable:true})
    @Type(() => admin_role_accessesCreateOrConnectWithoutAdmin_accessesInput)
    connectOrCreate?: Array<admin_role_accessesCreateOrConnectWithoutAdmin_accessesInput>;

    @Field(() => admin_role_accessesCreateManyAdmin_accessesInputEnvelope, {nullable:true})
    @Type(() => admin_role_accessesCreateManyAdmin_accessesInputEnvelope)
    createMany?: admin_role_accessesCreateManyAdmin_accessesInputEnvelope;

    @Field(() => [admin_role_accessesWhereUniqueInput], {nullable:true})
    @Type(() => admin_role_accessesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<admin_role_accessesWhereUniqueInput, 'admin_role_id_admin_access_id'>>;
}
