import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesWhereUniqueInput } from './admin-role-accesses-where-unique.input';
import { Type } from 'class-transformer';
import { admin_role_accessesUpdateWithoutAdmin_accessesInput } from './admin-role-accesses-update-without-admin-accesses.input';

@InputType()
export class admin_role_accessesUpdateWithWhereUniqueWithoutAdmin_accessesInput {

    @Field(() => admin_role_accessesWhereUniqueInput, {nullable:false})
    @Type(() => admin_role_accessesWhereUniqueInput)
    where!: admin_role_accessesWhereUniqueInput;

    @Field(() => admin_role_accessesUpdateWithoutAdmin_accessesInput, {nullable:false})
    @Type(() => admin_role_accessesUpdateWithoutAdmin_accessesInput)
    data!: admin_role_accessesUpdateWithoutAdmin_accessesInput;
}
