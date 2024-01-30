import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_countries_restrictionsWhereInput } from '../sg-countries-restrictions/sg-countries-restrictions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManysgCountriesRestrictionsArgs {

    @Field(() => sg_countries_restrictionsWhereInput, {nullable:true})
    @Type(() => sg_countries_restrictionsWhereInput)
    where?: sg_countries_restrictionsWhereInput;
}
