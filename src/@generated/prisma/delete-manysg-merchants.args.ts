import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchantsWhereInput } from '../sg-merchants/sg-merchants-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManysgMerchantsArgs {

    @Field(() => sg_merchantsWhereInput, {nullable:true})
    @Type(() => sg_merchantsWhereInput)
    where?: sg_merchantsWhereInput;
}
