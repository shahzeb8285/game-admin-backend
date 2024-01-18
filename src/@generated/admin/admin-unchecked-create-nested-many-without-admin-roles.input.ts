import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateWithoutAdmin_rolesInput } from './admin-create-without-admin-roles.input';
import { Type } from 'class-transformer';
import { AdminCreateOrConnectWithoutAdmin_rolesInput } from './admin-create-or-connect-without-admin-roles.input';
import { AdminCreateManyAdmin_rolesInputEnvelope } from './admin-create-many-admin-roles-input-envelope.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';

@InputType()
export class AdminUncheckedCreateNestedManyWithoutAdmin_rolesInput {

    @Field(() => [AdminCreateWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminCreateWithoutAdmin_rolesInput)
    create?: Array<AdminCreateWithoutAdmin_rolesInput>;

    @Field(() => [AdminCreateOrConnectWithoutAdmin_rolesInput], {nullable:true})
    @Type(() => AdminCreateOrConnectWithoutAdmin_rolesInput)
    connectOrCreate?: Array<AdminCreateOrConnectWithoutAdmin_rolesInput>;

    @Field(() => AdminCreateManyAdmin_rolesInputEnvelope, {nullable:true})
    @Type(() => AdminCreateManyAdmin_rolesInputEnvelope)
    createMany?: AdminCreateManyAdmin_rolesInputEnvelope;

    @Field(() => [AdminWhereUniqueInput], {nullable:true})
    @Type(() => AdminWhereUniqueInput)
    connect?: Array<AdminWhereUniqueInput>;
}
