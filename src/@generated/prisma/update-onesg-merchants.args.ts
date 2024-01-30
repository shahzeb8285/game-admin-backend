import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchantsUpdateInput } from '../sg-merchants/sg-merchants-update.input';
import { Type } from 'class-transformer';
import { sg_merchantsWhereUniqueInput } from '../sg-merchants/sg-merchants-where-unique.input';

@ArgsType()
export class UpdateOnesgMerchantsArgs {

    @Field(() => sg_merchantsUpdateInput, {nullable:false})
    @Type(() => sg_merchantsUpdateInput)
    data!: sg_merchantsUpdateInput;

    @Field(() => sg_merchantsWhereUniqueInput, {nullable:false})
    @Type(() => sg_merchantsWhereUniqueInput)
    where!: sg_merchantsWhereUniqueInput;
}
