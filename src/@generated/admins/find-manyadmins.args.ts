import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { adminsWhereInput } from './admins-where.input';
import { Type } from 'class-transformer';
import { adminsOrderByWithRelationInput } from './admins-order-by-with-relation.input';
import { adminsWhereUniqueInput } from './admins-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminsScalarFieldEnum } from '../prisma/admins-scalar-field.enum';

@ArgsType()
export class FindManyadminsArgs {

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;

    @Field(() => [adminsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<adminsOrderByWithRelationInput>;

    @Field(() => adminsWhereUniqueInput, {nullable:true})
    cursor?: adminsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AdminsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AdminsScalarFieldEnum>;
}
