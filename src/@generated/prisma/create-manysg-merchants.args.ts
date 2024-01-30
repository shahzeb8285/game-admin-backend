import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchantsCreateManyInput } from '../sg-merchants/sg-merchants-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManysgMerchantsArgs {

    @Field(() => [sg_merchantsCreateManyInput], {nullable:false})
    @Type(() => sg_merchantsCreateManyInput)
    data!: Array<sg_merchantsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
