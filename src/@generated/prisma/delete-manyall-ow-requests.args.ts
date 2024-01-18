import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { all_ow_requestsWhereInput } from '../all-ow-requests/all-ow-requests-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyallOwRequestsArgs {

    @Field(() => all_ow_requestsWhereInput, {nullable:true})
    @Type(() => all_ow_requestsWhereInput)
    where?: all_ow_requestsWhereInput;
}
