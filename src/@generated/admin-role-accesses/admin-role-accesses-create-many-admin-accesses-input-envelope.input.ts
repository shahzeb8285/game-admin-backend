import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { admin_role_accessesCreateManyAdmin_accessesInput } from './admin-role-accesses-create-many-admin-accesses.input';
import { Type } from 'class-transformer';

@InputType()
export class admin_role_accessesCreateManyAdmin_accessesInputEnvelope {

    @Field(() => [admin_role_accessesCreateManyAdmin_accessesInput], {nullable:false})
    @Type(() => admin_role_accessesCreateManyAdmin_accessesInput)
    data!: Array<admin_role_accessesCreateManyAdmin_accessesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
