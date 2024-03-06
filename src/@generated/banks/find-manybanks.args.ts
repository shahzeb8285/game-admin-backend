import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { banksWhereInput } from './banks-where.input';
import { Type } from 'class-transformer';
import { banksOrderByWithRelationInput } from './banks-order-by-with-relation.input';
import { banksWhereUniqueInput } from './banks-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BanksScalarFieldEnum } from '../prisma/banks-scalar-field.enum';

@ArgsType()
export class FindManybanksArgs {

    @Field(() => banksWhereInput, {nullable:true})
    @Type(() => banksWhereInput)
    where?: banksWhereInput;

    @Field(() => [banksOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<banksOrderByWithRelationInput>;

    @Field(() => banksWhereUniqueInput, {nullable:true})
    cursor?: banksWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BanksScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BanksScalarFieldEnum>;
}
