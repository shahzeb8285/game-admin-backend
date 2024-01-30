import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { all_ow_requestsWhereInput } from '../all-ow-requests/all-ow-requests-where.input';
import { Type } from 'class-transformer';
import { all_ow_requestsOrderByWithRelationInput } from '../all-ow-requests/all-ow-requests-order-by-with-relation.input';
import { all_ow_requestsWhereUniqueInput } from '../all-ow-requests/all-ow-requests-where-unique.input';
import { Int } from '@nestjs/graphql';
import { All_ow_requestsScalarFieldEnum } from './all-ow-requests-scalar-field.enum';

@ArgsType()
export class FindFirstallOwRequestsOrThrowArgs {

    @Field(() => all_ow_requestsWhereInput, {nullable:true})
    @Type(() => all_ow_requestsWhereInput)
    where?: all_ow_requestsWhereInput;

    @Field(() => [all_ow_requestsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<all_ow_requestsOrderByWithRelationInput>;

    @Field(() => all_ow_requestsWhereUniqueInput, {nullable:true})
    cursor?: all_ow_requestsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [All_ow_requestsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof All_ow_requestsScalarFieldEnum>;
}
