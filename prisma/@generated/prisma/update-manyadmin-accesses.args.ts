import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { admin_accessesUpdateManyMutationInput } from '../admin-accesses/admin-accesses-update-many-mutation.input';
import { Type } from 'class-transformer';
import { admin_accessesWhereInput } from '../admin-accesses/admin-accesses-where.input';

@ArgsType()
export class UpdateManyadminAccessesArgs {

    @Field(() => admin_accessesUpdateManyMutationInput, {nullable:false})
    @Type(() => admin_accessesUpdateManyMutationInput)
    data!: admin_accessesUpdateManyMutationInput;

    @Field(() => admin_accessesWhereInput, {nullable:true})
    @Type(() => admin_accessesWhereInput)
    where?: admin_accessesWhereInput;
}
