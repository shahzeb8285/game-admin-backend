import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesCreateWithoutAdmin_accessesInput } from './admin-role-accesses-create-without-admin-accesses.input';
import { Type } from 'class-transformer';
import { AdminRoleAccessesCreateOrConnectWithoutAdmin_accessesInput } from './admin-role-accesses-create-or-connect-without-admin-accesses.input';
import { AdminRoleAccessesCreateManyAdmin_accessesInputEnvelope } from './admin-role-accesses-create-many-admin-accesses-input-envelope.input';
import { AdminRoleAccessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';

@InputType()
export class AdminRoleAccessesUncheckedCreateNestedManyWithoutAdmin_accessesInput {

    @Field(() => [AdminRoleAccessesCreateWithoutAdmin_accessesInput], {nullable:true})
    @Type(() => AdminRoleAccessesCreateWithoutAdmin_accessesInput)
    create?: Array<AdminRoleAccessesCreateWithoutAdmin_accessesInput>;

    @Field(() => [AdminRoleAccessesCreateOrConnectWithoutAdmin_accessesInput], {nullable:true})
    @Type(() => AdminRoleAccessesCreateOrConnectWithoutAdmin_accessesInput)
    connectOrCreate?: Array<AdminRoleAccessesCreateOrConnectWithoutAdmin_accessesInput>;

    @Field(() => AdminRoleAccessesCreateManyAdmin_accessesInputEnvelope, {nullable:true})
    @Type(() => AdminRoleAccessesCreateManyAdmin_accessesInputEnvelope)
    createMany?: AdminRoleAccessesCreateManyAdmin_accessesInputEnvelope;

    @Field(() => [AdminRoleAccessesWhereUniqueInput], {nullable:true})
    @Type(() => AdminRoleAccessesWhereUniqueInput)
    connect?: Array<AdminRoleAccessesWhereUniqueInput>;
}
