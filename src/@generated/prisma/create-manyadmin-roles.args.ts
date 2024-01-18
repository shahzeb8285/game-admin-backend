import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_rolesCreateManyInput } from '../admin-roles/admin-roles-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyadminRolesArgs {

    @Field(() => [admin_rolesCreateManyInput], {nullable:false})
    @Type(() => admin_rolesCreateManyInput)
    data!: Array<admin_rolesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
