import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchantsWhereInput } from '../sg-merchants/sg-merchants-where.input';
import { Type } from 'class-transformer';
import { sg_merchantsOrderByWithRelationInput } from '../sg-merchants/sg-merchants-order-by-with-relation.input';
import { sg_merchantsWhereUniqueInput } from '../sg-merchants/sg-merchants-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Sg_merchantsScalarFieldEnum } from './sg-merchants-scalar-field.enum';

@ArgsType()
export class FindFirstsgMerchantsArgs {

    @Field(() => sg_merchantsWhereInput, {nullable:true})
    @Type(() => sg_merchantsWhereInput)
    where?: sg_merchantsWhereInput;

    @Field(() => [sg_merchantsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<sg_merchantsOrderByWithRelationInput>;

    @Field(() => sg_merchantsWhereUniqueInput, {nullable:true})
    cursor?: sg_merchantsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Sg_merchantsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Sg_merchantsScalarFieldEnum>;
}
