import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_countries_restrictionsCreateManyInput } from '../sg-countries-restrictions/sg-countries-restrictions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManysgCountriesRestrictionsArgs {

    @Field(() => [sg_countries_restrictionsCreateManyInput], {nullable:false})
    @Type(() => sg_countries_restrictionsCreateManyInput)
    data!: Array<sg_countries_restrictionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
