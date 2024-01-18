import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminRoleAccessesCreateManyAdmin_accessesInput } from './admin-role-accesses-create-many-admin-accesses.input';
import { Type } from 'class-transformer';

@InputType()
export class AdminRoleAccessesCreateManyAdmin_accessesInputEnvelope {

    @Field(() => [AdminRoleAccessesCreateManyAdmin_accessesInput], {nullable:false})
    @Type(() => AdminRoleAccessesCreateManyAdmin_accessesInput)
    data!: Array<AdminRoleAccessesCreateManyAdmin_accessesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
