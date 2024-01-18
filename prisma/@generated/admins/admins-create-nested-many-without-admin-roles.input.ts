import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsCreateWithoutAdmin_rolesInput } from './admins-create-without-admin-roles.input';
import { Type } from 'class-transformer';
import { AdminsCreateOrConnectWithoutAdmin_rolesInput } from './admins-create-or-connect-without-admin-roles.input';
import { AdminsCreateManyAdmin_rolesInputEnvelope } from './admins-create-many-admin-roles-input-envelope.input';
import { AdminsWhereUniqueInput } from './admins-where-unique.input';

@InputType()
export class AdminsCreateNestedManyWithoutAdmin_rolesInput {

    @Field(() => [AdminsCreateWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminsCreateWithoutAdmin_rolesInput)
    create?: Array<AdminsCreateWithoutAdmin_rolesInput>;

    @Field(() => [AdminsCreateOrConnectWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminsCreateOrConnectWithoutAdmin_rolesInput)
    connectOrCreate?: Array<AdminsCreateOrConnectWithoutAdmin_rolesInput>;

    @Field(() => AdminsCreateManyAdmin_rolesInputEnvelope, {nullable:true})
    @Type(() => AdminsCreateManyAdmin_rolesInputEnvelope)
    createMany?: AdminsCreateManyAdmin_rolesInputEnvelope;

    @Field(() => [AdminsWhereUniqueInput], {nullable:true})
    @Type(() => AdminsWhereUniqueInput)
    connect?: Array<AdminsWhereUniqueInput>;
}
