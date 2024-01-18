import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { adminsUpdateManyMutationInput } from './admins-update-many-mutation.input';
import { Type } from 'class-transformer';
import { adminsWhereInput } from './admins-where.input';

@ArgsType()
export class UpdateManyadminsArgs {

    @Field(() => adminsUpdateManyMutationInput, {nullable:false})
    @Type(() => adminsUpdateManyMutationInput)
    data!: adminsUpdateManyMutationInput;

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;
}
