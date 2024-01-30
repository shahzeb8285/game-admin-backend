import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_countries_restrictionsWhereInput } from '../sg-countries-restrictions/sg-countries-restrictions-where.input';
import { Type } from 'class-transformer';
import { sg_countries_restrictionsOrderByWithRelationInput } from '../sg-countries-restrictions/sg-countries-restrictions-order-by-with-relation.input';
import { sg_countries_restrictionsWhereUniqueInput } from '../sg-countries-restrictions/sg-countries-restrictions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Sg_countries_restrictionsScalarFieldEnum } from './sg-countries-restrictions-scalar-field.enum';

@ArgsType()
export class FindFirstsgCountriesRestrictionsOrThrowArgs {

    @Field(() => sg_countries_restrictionsWhereInput, {nullable:true})
    @Type(() => sg_countries_restrictionsWhereInput)
    where?: sg_countries_restrictionsWhereInput;

    @Field(() => [sg_countries_restrictionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<sg_countries_restrictionsOrderByWithRelationInput>;

    @Field(() => sg_countries_restrictionsWhereUniqueInput, {nullable:true})
    cursor?: sg_countries_restrictionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Sg_countries_restrictionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Sg_countries_restrictionsScalarFieldEnum>;
}
