import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { adminsWhereInput } from './admins-where.input';
import { Type } from 'class-transformer';
import { adminsOrderByWithAggregationInput } from './admins-order-by-with-aggregation.input';
import { AdminsScalarFieldEnum } from '../prisma/admins-scalar-field.enum';
import { adminsScalarWhereWithAggregatesInput } from './admins-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class adminsGroupByArgs {

    @Field(() => adminsWhereInput, {nullable:true})
    @Type(() => adminsWhereInput)
    where?: adminsWhereInput;

    @Field(() => [adminsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<adminsOrderByWithAggregationInput>;

    @Field(() => [AdminsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AdminsScalarFieldEnum>;

    @Field(() => adminsScalarWhereWithAggregatesInput, {nullable:true})
    having?: adminsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
