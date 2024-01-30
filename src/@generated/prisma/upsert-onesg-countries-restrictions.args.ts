import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_countries_restrictionsWhereUniqueInput } from '../sg-countries-restrictions/sg-countries-restrictions-where-unique.input';
import { Type } from 'class-transformer';
import { sg_countries_restrictionsCreateInput } from '../sg-countries-restrictions/sg-countries-restrictions-create.input';
import { sg_countries_restrictionsUpdateInput } from '../sg-countries-restrictions/sg-countries-restrictions-update.input';

@ArgsType()
export class UpsertOnesgCountriesRestrictionsArgs {

    @Field(() => sg_countries_restrictionsWhereUniqueInput, {nullable:false})
    @Type(() => sg_countries_restrictionsWhereUniqueInput)
    where!: sg_countries_restrictionsWhereUniqueInput;

    @Field(() => sg_countries_restrictionsCreateInput, {nullable:false})
    @Type(() => sg_countries_restrictionsCreateInput)
    create!: sg_countries_restrictionsCreateInput;

    @Field(() => sg_countries_restrictionsUpdateInput, {nullable:false})
    @Type(() => sg_countries_restrictionsUpdateInput)
    update!: sg_countries_restrictionsUpdateInput;
}
