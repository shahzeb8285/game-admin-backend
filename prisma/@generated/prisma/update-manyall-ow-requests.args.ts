import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { all_ow_requestsUpdateManyMutationInput } from '../all-ow-requests/all-ow-requests-update-many-mutation.input';
import { Type } from 'class-transformer';
import { all_ow_requestsWhereInput } from '../all-ow-requests/all-ow-requests-where.input';

@ArgsType()
export class UpdateManyallOwRequestsArgs {

    @Field(() => all_ow_requestsUpdateManyMutationInput, {nullable:false})
    @Type(() => all_ow_requestsUpdateManyMutationInput)
    data!: all_ow_requestsUpdateManyMutationInput;

    @Field(() => all_ow_requestsWhereInput, {nullable:true})
    @Type(() => all_ow_requestsWhereInput)
    where?: all_ow_requestsWhereInput;
}
