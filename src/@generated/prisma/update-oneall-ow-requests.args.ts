import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { all_ow_requestsUpdateInput } from '../all-ow-requests/all-ow-requests-update.input';
import { Type } from 'class-transformer';
import { all_ow_requestsWhereUniqueInput } from '../all-ow-requests/all-ow-requests-where-unique.input';

@ArgsType()
export class UpdateOneallOwRequestsArgs {

    @Field(() => all_ow_requestsUpdateInput, {nullable:false})
    @Type(() => all_ow_requestsUpdateInput)
    data!: all_ow_requestsUpdateInput;

    @Field(() => all_ow_requestsWhereUniqueInput, {nullable:false})
    @Type(() => all_ow_requestsWhereUniqueInput)
    where!: all_ow_requestsWhereUniqueInput;
}
