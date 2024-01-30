import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_countries_restrictionsUpdateInput } from '../sg-countries-restrictions/sg-countries-restrictions-update.input';
import { Type } from 'class-transformer';
import { sg_countries_restrictionsWhereUniqueInput } from '../sg-countries-restrictions/sg-countries-restrictions-where-unique.input';

@ArgsType()
export class UpdateOnesgCountriesRestrictionsArgs {

    @Field(() => sg_countries_restrictionsUpdateInput, {nullable:false})
    @Type(() => sg_countries_restrictionsUpdateInput)
    data!: sg_countries_restrictionsUpdateInput;

    @Field(() => sg_countries_restrictionsWhereUniqueInput, {nullable:false})
    @Type(() => sg_countries_restrictionsWhereUniqueInput)
    where!: sg_countries_restrictionsWhereUniqueInput;
}
