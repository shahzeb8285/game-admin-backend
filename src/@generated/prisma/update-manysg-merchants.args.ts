import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sg_merchantsUpdateManyMutationInput } from '../sg-merchants/sg-merchants-update-many-mutation.input';
import { Type } from 'class-transformer';
import { sg_merchantsWhereInput } from '../sg-merchants/sg-merchants-where.input';

@ArgsType()
export class UpdateManysgMerchantsArgs {

    @Field(() => sg_merchantsUpdateManyMutationInput, {nullable:false})
    @Type(() => sg_merchantsUpdateManyMutationInput)
    data!: sg_merchantsUpdateManyMutationInput;

    @Field(() => sg_merchantsWhereInput, {nullable:true})
    @Type(() => sg_merchantsWhereInput)
    where?: sg_merchantsWhereInput;
}
