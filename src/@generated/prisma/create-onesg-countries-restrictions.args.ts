import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_countries_restrictionsCreateInput } from '../sg-countries-restrictions/sg-countries-restrictions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnesgCountriesRestrictionsArgs {

    @Field(() => sg_countries_restrictionsCreateInput, {nullable:false})
    @Type(() => sg_countries_restrictionsCreateInput)
    data!: sg_countries_restrictionsCreateInput;
}
