import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { all_ow_requestsCreateInput } from '../all-ow-requests/all-ow-requests-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneallOwRequestsArgs {

    @Field(() => all_ow_requestsCreateInput, {nullable:false})
    @Type(() => all_ow_requestsCreateInput)
    data!: all_ow_requestsCreateInput;
}
