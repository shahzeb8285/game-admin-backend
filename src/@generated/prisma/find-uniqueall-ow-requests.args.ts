import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { all_ow_requestsWhereUniqueInput } from '../all-ow-requests/all-ow-requests-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueallOwRequestsArgs {

    @Field(() => all_ow_requestsWhereUniqueInput, {nullable:false})
    @Type(() => all_ow_requestsWhereUniqueInput)
    where!: all_ow_requestsWhereUniqueInput;
}
