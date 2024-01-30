import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchantsWhereUniqueInput } from '../sg-merchants/sg-merchants-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquesgMerchantsOrThrowArgs {

    @Field(() => sg_merchantsWhereUniqueInput, {nullable:false})
    @Type(() => sg_merchantsWhereUniqueInput)
    where!: sg_merchantsWhereUniqueInput;
}
