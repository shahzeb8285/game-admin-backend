import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchantsCreateInput } from '../sg-merchants/sg-merchants-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnesgMerchantsArgs {

    @Field(() => sg_merchantsCreateInput, {nullable:false})
    @Type(() => sg_merchantsCreateInput)
    data!: sg_merchantsCreateInput;
}
