import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_countries_restrictionsUpdateManyMutationInput } from '../sg-countries-restrictions/sg-countries-restrictions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { sg_countries_restrictionsWhereInput } from '../sg-countries-restrictions/sg-countries-restrictions-where.input';

@ArgsType()
export class UpdateManysgCountriesRestrictionsArgs {

    @Field(() => sg_countries_restrictionsUpdateManyMutationInput, {nullable:false})
    @Type(() => sg_countries_restrictionsUpdateManyMutationInput)
    data!: sg_countries_restrictionsUpdateManyMutationInput;

    @Field(() => sg_countries_restrictionsWhereInput, {nullable:true})
    @Type(() => sg_countries_restrictionsWhereInput)
    where?: sg_countries_restrictionsWhereInput;
}
