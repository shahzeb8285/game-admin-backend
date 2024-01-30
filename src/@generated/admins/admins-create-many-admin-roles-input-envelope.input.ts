import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsCreateManyAdmin_rolesInput } from './admins-create-many-admin-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class adminsCreateManyAdmin_rolesInputEnvelope {

    @Field(() => [adminsCreateManyAdmin_rolesInput], {nullable:false})
    @Type(() => adminsCreateManyAdmin_rolesInput)
    data!: Array<adminsCreateManyAdmin_rolesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
