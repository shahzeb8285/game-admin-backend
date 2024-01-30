import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { all_ow_requestsWhereUniqueInput } from '../all-ow-requests/all-ow-requests-where-unique.input';
import { Type } from 'class-transformer';
import { all_ow_requestsCreateInput } from '../all-ow-requests/all-ow-requests-create.input';
import { all_ow_requestsUpdateInput } from '../all-ow-requests/all-ow-requests-update.input';

@ArgsType()
export class UpsertOneallOwRequestsArgs {

    @Field(() => all_ow_requestsWhereUniqueInput, {nullable:false})
    @Type(() => all_ow_requestsWhereUniqueInput)
    where!: all_ow_requestsWhereUniqueInput;

    @Field(() => all_ow_requestsCreateInput, {nullable:false})
    @Type(() => all_ow_requestsCreateInput)
    create!: all_ow_requestsCreateInput;

    @Field(() => all_ow_requestsUpdateInput, {nullable:false})
    @Type(() => all_ow_requestsUpdateInput)
    update!: all_ow_requestsUpdateInput;
}
