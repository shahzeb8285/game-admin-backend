import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_countries_restrictionsWhereUniqueInput } from '../sg-countries-restrictions/sg-countries-restrictions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnesgCountriesRestrictionsArgs {

    @Field(() => sg_countries_restrictionsWhereUniqueInput, {nullable:false})
    @Type(() => sg_countries_restrictionsWhereUniqueInput)
    where!: sg_countries_restrictionsWhereUniqueInput;
}
