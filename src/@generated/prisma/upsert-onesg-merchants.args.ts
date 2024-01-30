import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchantsWhereUniqueInput } from '../sg-merchants/sg-merchants-where-unique.input';
import { Type } from 'class-transformer';
import { sg_merchantsCreateInput } from '../sg-merchants/sg-merchants-create.input';
import { sg_merchantsUpdateInput } from '../sg-merchants/sg-merchants-update.input';

@ArgsType()
export class UpsertOnesgMerchantsArgs {

    @Field(() => sg_merchantsWhereUniqueInput, {nullable:false})
    @Type(() => sg_merchantsWhereUniqueInput)
    where!: sg_merchantsWhereUniqueInput;

    @Field(() => sg_merchantsCreateInput, {nullable:false})
    @Type(() => sg_merchantsCreateInput)
    create!: sg_merchantsCreateInput;

    @Field(() => sg_merchantsUpdateInput, {nullable:false})
    @Type(() => sg_merchantsUpdateInput)
    update!: sg_merchantsUpdateInput;
}
