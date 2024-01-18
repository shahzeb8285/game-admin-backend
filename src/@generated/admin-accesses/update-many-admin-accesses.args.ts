import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminAccessesUpdateManyMutationInput } from './admin-accesses-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AdminAccessesWhereInput } from './admin-accesses-where.input';

@ArgsType()
export class UpdateManyAdminAccessesArgs {

    @Field(() => AdminAccessesUpdateManyMutationInput, {nullable:false})
    @Type(() => AdminAccessesUpdateManyMutationInput)
    data!: AdminAccessesUpdateManyMutationInput;

    @Field(() => AdminAccessesWhereInput, {nullable:true})
    @Type(() => AdminAccessesWhereInput)
    where?: AdminAccessesWhereInput;
}
