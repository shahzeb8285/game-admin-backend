import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdminCreateManyAdmin_rolesInput } from './admin-create-many-admin-roles.input';
import { Type } from 'class-transformer';

@InputType()
export class AdminCreateManyAdmin_rolesInputEnvelope {

    @Field(() => [AdminCreateManyAdmin_rolesInput], {nullable:false})
    @Type(() => AdminCreateManyAdmin_rolesInput)
    data!: Array<AdminCreateManyAdmin_rolesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
