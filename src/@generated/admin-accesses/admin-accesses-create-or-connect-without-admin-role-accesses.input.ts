import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_accessesWhereUniqueInput } from './admin-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { admin_accessesCreateWithoutAdmin_role_accessesInput } from './admin-accesses-create-without-admin-role-accesses.input';

@InputType()
export class admin_accessesCreateOrConnectWithoutAdmin_role_accessesInput {

    @Field(() => admin_accessesWhereUniqueInput, {nullable:false})
    @Type(() => admin_accessesWhereUniqueInput)
    where!: admin_accessesWhereUniqueInput;

    @Field(() => admin_accessesCreateWithoutAdmin_role_accessesInput, {nullable:false})
    @Type(() => admin_accessesCreateWithoutAdmin_role_accessesInput)
    create!: admin_accessesCreateWithoutAdmin_role_accessesInput;
}
