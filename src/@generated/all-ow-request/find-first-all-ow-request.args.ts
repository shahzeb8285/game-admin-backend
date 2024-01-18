import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AllOwRequestWhereInput } from './all-ow-request-where.input';
import { Type } from 'class-transformer';
import { AllOwRequestOrderByWithRelationInput } from './all-ow-request-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AllOwRequestWhereUniqueInput } from './all-ow-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AllOwRequestScalarFieldEnum } from './all-ow-request-scalar-field.enum';

@ArgsType()
export class FindFirstAllOwRequestArgs {

    @Field(() => AllOwRequestWhereInput, {nullable:true})
    @Type(() => AllOwRequestWhereInput)
    where?: AllOwRequestWhereInput;

    @Field(() => [AllOwRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AllOwRequestOrderByWithRelationInput>;

    @Field(() => AllOwRequestWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AllOwRequestWhereUniqueInput, 'allow_request_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AllOwRequestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AllOwRequestScalarFieldEnum>;
}
