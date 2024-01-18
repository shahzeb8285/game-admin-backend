import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminsUpdateManyMutationInput } from './admins-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AdminsWhereInput } from './admins-where.input';

@ArgsType()
export class UpdateManyAdminsArgs {

    @Field(() => AdminsUpdateManyMutationInput, {nullable:false})
    @Type(() => AdminsUpdateManyMutationInput)
    data!: AdminsUpdateManyMutationInput;

    @Field(() => AdminsWhereInput, {nullable:true})
    @Type(() => AdminsWhereInput)
    where?: AdminsWhereInput;
}
