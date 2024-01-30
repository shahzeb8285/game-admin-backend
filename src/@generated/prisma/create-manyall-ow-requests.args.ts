import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { all_ow_requestsCreateManyInput } from '../all-ow-requests/all-ow-requests-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyallOwRequestsArgs {

    @Field(() => [all_ow_requestsCreateManyInput], {nullable:false})
    @Type(() => all_ow_requestsCreateManyInput)
    data!: Array<all_ow_requestsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
