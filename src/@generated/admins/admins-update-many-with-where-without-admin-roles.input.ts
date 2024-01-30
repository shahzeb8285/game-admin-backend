import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { adminsScalarWhereInput } from './admins-scalar-where.input';
import { Type } from 'class-transformer';
import { adminsUpdateManyMutationInput } from './admins-update-many-mutation.input';

@InputType()
export class adminsUpdateManyWithWhereWithoutAdmin_rolesInput {

    @Field(() => adminsScalarWhereInput, {nullable:false})
    @Type(() => adminsScalarWhereInput)
    where!: adminsScalarWhereInput;

    @Field(() => adminsUpdateManyMutationInput, {nullable:false})
    @Type(() => adminsUpdateManyMutationInput)
    data!: adminsUpdateManyMutationInput;
}
