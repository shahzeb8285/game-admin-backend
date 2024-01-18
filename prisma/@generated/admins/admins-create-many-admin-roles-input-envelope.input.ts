import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminsCreateManyAdmin_rolesInput } from './admins-create-many-admin-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class AdminsCreateManyAdmin_rolesInputEnvelope {

    @Field(() => [AdminsCreateManyAdmin_rolesInput], {nullable:false})
    @Type(() => AdminsCreateManyAdmin_rolesInput)
    data!: Array<AdminsCreateManyAdmin_rolesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
